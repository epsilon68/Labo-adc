// player-core.js — Moteur de rendu des scénarios
(function() {
  // Détection du contexte
  const path = getParcoursActif();
  const params = new URLSearchParams(window.location.search);
  const moduleKey = params.get('module') || (window.location.pathname.includes('dante') ? 'dante' : 'adc');

  // Trouver l'index de l'étape dans le parcours actif
  let stepIndex = 0;
  let scenarioId = null;
  let stepKey = null;

  if (path) {
    const etapes = path.etapes;
    for (let i = 0; i < etapes.length; i++) {
      const e = etapes[i];
      // Vérifier si cette étape correspond au module actuel
      const isAdc = moduleKey === 'adc' && (e.key === 'adc' || e.key === 'calculateurs');
      const isDante = moduleKey === 'dante' && e.key === 'dante2';
      if (isAdc || isDante) {
        stepIndex = i;
        stepKey = e.key;
        scenarioId = `${moduleKey}-${path.id}-${i}`;
        break;
      }
    }
  }

  // Si pas de scénario trouvé, charger un fallback générique
  if (!scenarioId || !SCENARIOS[scenarioId]) {
    scenarioId = (moduleKey === 'adc') ? 'adc-debutant-0' : 'dante-debutant-0';
    stepKey = moduleKey;
  }

  const scenario = SCENARIOS[scenarioId];
  const container = document.getElementById('playerContainer');
  if (!container) return;

  // Fonction de rendu de l'UI dynamique
  function renderPlayer() {
    let html = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-top:10px;">
        <div style="background:#161b22; border-radius:14px; padding:16px; border:1px solid #30363d;">
          <h3 style="margin:0 0 12px; color:#d2a8ff;">📘 Consigne</h3>
          <p style="font-size:1rem; line-height:1.6; margin:0 0 12px;">${scenario.instruction}</p>
          <div style="padding:12px; background:#0d1117; border-radius:8px; font-size:0.85rem; color:#8b949e;">
            <strong style="color:var(--text);">Niveau :</strong> ${path ? path.nom : 'Générique'}
          </div>
        </div>
        <div style="background:#161b22; border-radius:14px; padding:16px; border:1px solid #30363d;">
          <h3 style="margin:0 0 12px; color:#d2a8ff;">🎮 Simulation</h3>
          <div id="simulationArea" style="height:200px; background:#0d1117; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#8b949e; font-size:0.9rem;">
            🖥 Zone interactive (Canvas/Animation)
          </div>
          <div id="validationArea" style="margin-top:16px; text-align:right;">
            <button id="validateBtn" style="background:#2ea043; border:none; padding:12px 24px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; transition:background .2s;">
              ✅ Valider cette étape
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML = html;

    // Gestion du glossaire sur les termes
    document.querySelectorAll('.glossary-term').forEach(el => {
      el.addEventListener('click', (e) => {
        const term = el.dataset.term;
        showGlossaryPopover(term, e);
      });
    });

    // Validation
    document.getElementById('validateBtn').addEventListener('click', () => {
      if (stepKey) {
        localStorage.setItem('laboProgress_' + stepKey, 'done');
        localStorage.setItem('laboProgressUpdate', Date.now());
        alert(scenario.successMessage || 'Étape validée !');
        window.location.href = 'index.html';
      } else {
        alert('Erreur : clé inconnue.');
      }
    });

    // Démarrer les animations en fonction du module
    if (moduleKey === 'adc') startAdcSimulation(scenario);
    else if (moduleKey === 'dante') startDanteSimulation(scenario);
  }

  // =============================================
  // SIMULATION ADC (Canvas)
  // =============================================
  function startAdcSimulation(scenario) {
    const area = document.getElementById('simulationArea');
    const canvas = document.createElement('canvas');
    canvas.width = area.clientWidth || 400;
    canvas.height = 180;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    area.innerHTML = '';
    area.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let time = 0;
    const freq = scenario.params.freq || 440;
    const sampleRate = scenario.params.sampleRate || 8000;
    const bits = scenario.params.bits || 8;

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Signal analogique (sinusoïde)
      ctx.beginPath();
      ctx.strokeStyle = '#58a6ff';
      ctx.lineWidth = 2;
      for (let x = 0; x < w; x++) {
        const t = (x / w) * 4 * Math.PI;
        const y = h/2 - (h/2 - 10) * 0.4 * Math.sin(t + time * 0.02);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Échantillons
      ctx.beginPath();
      ctx.strokeStyle = '#3fb950';
      ctx.lineWidth = 3;
      const numSamples = Math.floor(w / 12);
      for (let i = 0; i < numSamples; i++) {
        const x = (i / numSamples) * w;
        const t = (x / w) * 4 * Math.PI;
        const y = h/2 - (h/2 - 10) * 0.4 * Math.sin(t + time * 0.02);
        ctx.fillRect(x-3, y-3, 6, 6);
        ctx.fillStyle = '#3fb950';
      }
      ctx.stroke();

      // Texte info
      ctx.fillStyle = '#8b949e';
      ctx.font = '11px sans-serif';
      ctx.fillText(`Fréquence: ${freq} Hz · Échantillon: ${sampleRate} Hz · Bits: ${bits}`, 10, 20);

      time++;
      requestAnimationFrame(draw);
    }
    draw();

    // Redimension
    window.addEventListener('resize', () => {
      canvas.width = area.clientWidth || 400;
    });
  }

  // =============================================
  // SIMULATION DANTE (Animation de paquets)
  // =============================================
  function startDanteSimulation(scenario) {
    const area = document.getElementById('simulationArea');
    const canvas = document.createElement('canvas');
    canvas.width = area.clientWidth || 400;
    canvas.height = 180;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    area.innerHTML = '';
    area.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let offset = 0;

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Switch central
      ctx.fillStyle = '#21262d';
      ctx.strokeStyle = '#6e40c9';
      ctx.lineWidth = 2;
      ctx.fillRect(w/2 - 30, h/2 - 20, 60, 40);
      ctx.strokeRect(w/2 - 30, h/2 - 20, 60, 40);
      ctx.fillStyle = '#bc8cff';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('SWITCH', w/2 - 28, h/2 + 4);

      // Paquets
      const colors = ['#58a6ff', '#3fb950', '#d29922', '#f778ba'];
      for (let i = 0; i < 4; i++) {
        const x = (i * 80 + offset) % (w + 40) - 20;
        const y = h/2 - 40 + i * 22;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.fillStyle = '#e6edf3';
        ctx.font = '8px sans-serif';
        ctx.fillText('P' + (i+1), x-5, y+3);
      }

      // Légende
      ctx.fillStyle = '#8b949e';
      ctx.font = '10px sans-serif';
      ctx.fillText('🟦 Audio · 🟩 Sync · 🟨 PTP · 🟪 Qos', 10, 20);

      offset = (offset + 2) % (w + 40);
      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', () => {
      canvas.width = area.clientWidth || 400;
    });
  }

  // Lancer l'interface
  renderPlayer();
})();
