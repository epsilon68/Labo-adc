// player-core.js — Utilise la consigne stockée dans l'étape du parcours
(function() {
  const path = getParcoursActif();
  const params = new URLSearchParams(window.location.search);
  const moduleKey = params.get('module') || (window.location.pathname.includes('dante') ? 'dante' : 'adc');

  let stepIndex = 0;
  let stepKey = null;
  let instruction = '';
  let successMessage = '';

  if (path) {
    const etapes = path.etapes;
    for (let i = 0; i < etapes.length; i++) {
      const e = etapes[i];
      const isAdc = moduleKey === 'adc' && (e.key === 'adc' || e.key === 'calculateurs');
      const isDante = moduleKey === 'dante' && e.key === 'dante2';
      if (isAdc || isDante) {
        stepIndex = i;
        stepKey = e.key;
        // Récupérer la consigne depuis l'étape (parcours.js)
        instruction = e.consigne || `Consigne pour ${e.module}`;
        successMessage = '✅ Étape validée ! Passez à la suite.';
        break;
      }
    }
  }

  // Fallback si on n'a pas trouvé d'étape
  if (!stepKey) {
    instruction = '⚠️ Aucune consigne trouvée. Vérifiez votre parcours.';
    successMessage = '🔁 Retour au tableau de bord.';
  }

  const container = document.getElementById('playerContainer');
  if (!container) return;

  function renderPlayer() {
    // Appliquer la surbrillance
    const highlightedInstruction = highlightGlossaryTerms(instruction);
    const highlightedSuccess = highlightGlossaryTerms(successMessage);

    let html = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-top:10px;">
        <div style="background:#161b22; border-radius:14px; padding:16px; border:1px solid #30363d;">
          <h3 style="margin:0 0 12px; color:#d2a8ff;">📘 Consigne</h3>
          <p style="font-size:1rem; line-height:1.6; margin:0 0 12px;">${highlightedInstruction}</p>
          <div style="padding:12px; background:#0d1117; border-radius:8px; font-size:0.85rem; color:#8b949e;">
            <strong style="color:var(--text);">Niveau :</strong> ${path ? path.nom : 'Générique'} · <strong>Module :</strong> ${moduleKey}
          </div>
        </div>
        <div style="background:#161b22; border-radius:14px; padding:16px; border:1px solid #30363d;">
          <h3 style="margin:0 0 12px; color:#d2a8ff;">🎮 Simulation</h3>
          <div id="simulationArea" style="height:200px; background:#0d1117; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#8b949e; font-size:0.9rem;">
            🖥 Zone interactive (Canvas/Animation)
          </div>
          <div id="validationArea" style="margin-top:16px; text-align:right;">
            <p style="font-size:0.85rem; color:#8b949e; text-align:left; margin:0 0 12px; background:#0d1117; padding:10px; border-radius:8px;">
              ${highlightedSuccess}
            </p>
            <button id="validateBtn" style="background:#2ea043; border:none; padding:12px 24px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; transition:background .2s;">
              ✅ Valider cette étape
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML = html;

    document.getElementById('validateBtn').addEventListener('click', () => {
      if (stepKey) {
        localStorage.setItem('laboProgress_' + stepKey, 'done');
        localStorage.setItem('laboProgressUpdate', Date.now());
        window.location.href = 'index.html';
      } else {
        alert('Erreur : clé inconnue.');
      }
    });

    // Démarrer les animations
    if (moduleKey === 'adc') startAdcSimulation();
    else if (moduleKey === 'dante') startDanteSimulation();
  }

  // =============================================
  // SIMULATION ADC (optimisée pour iPad)
  // =============================================
  function startAdcSimulation() {
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
    const freq = 440, sampleRate = 8000, bits = 8;

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Signal analogique
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
      const numSamples = Math.floor(w / 12);
      for (let i = 0; i < numSamples; i++) {
        const x = (i / numSamples) * w;
        const t = (x / w) * 4 * Math.PI;
        const y = h/2 - (h/2 - 10) * 0.4 * Math.sin(t + time * 0.02);
        ctx.fillStyle = '#3fb950';
        ctx.fillRect(x-3, y-3, 6, 6);
      }

      ctx.fillStyle = '#8b949e';
      ctx.font = '11px sans-serif';
      ctx.fillText(`Fréquence: ${freq} Hz · Échantillon: ${sampleRate} Hz · Bits: ${bits}`, 10, 20);

      time++;
      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', () => {
      canvas.width = area.clientWidth || 400;
    });
  }

  // =============================================
  // SIMULATION DANTE (optimisée iPad)
  // =============================================
  function startDanteSimulation() {
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

      // Switch
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

  renderPlayer();
})();
