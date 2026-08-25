// parcours.js — Chaque étape contient SA propre consigne
const PARCOURS = {
  debutant: {
    id: 'debutant',
    nom: 'Débutant',
    emoji: '🟢',
    description: 'Découvrez l’audio numérique et les réseaux audio pas à pas.',
    etapes: [
      { 
        module: 'Labo ADC', 
        fichier: 'labo-adc.html', 
        key: 'adc',
        consigne: '🔊 Découverte : Observez le signal analogique et sa version échantillonnée. Cliquez sur "Lancer" pour démarrer la visualisation.',
        conseil: 'Utilisez le mode guidé et les presets d’usine.'
      },
      { 
        module: 'Mission Dante — Niveau 2', 
        fichier: 'dante-niveau-2.html', 
        key: 'dante2',
        consigne: '🌐 Découverte du clocking Dante : Deux appareils cherchent un Master. Lancez l\'élection BMC.',
        conseil: 'Consultez le glossaire pour comprendre PTP et Grandmaster.'
      }
    ],
    badge: '🟢 Explorateur audio'
  },
  technicien: {
    id: 'technicien',
    nom: 'Technicien son',
    emoji: '🔵',
    description: 'Maîtrisez les réglages et le diagnostic Dante simple.',
    etapes: [
      { 
        module: 'Labo ADC', 
        fichier: 'labo-adc.html', 
        key: 'adc',
        consigne: '🔧 Réglages et débit binaire : Réglez la fréquence d\'échantillonnage > 2× la fréquence du signal. Calculez le débit binaire.',
        conseil: 'Explorez librement, comparez les reconstructions.'
      },
      { 
        module: 'Mission Dante — Niveau 2', 
        fichier: 'dante-niveau-2.html', 
        key: 'dante2',
        consigne: '🔧 Routing et Subscriptions : Faites glisser les flux de l\'émetteur vers le récepteur. Abonnez 2 canaux.',
        conseil: 'Comprenez le multicast, la QoS et PTP.'
      }
    ],
    badge: '🔵 Technicien Dante certifié'
  },
  integrateur: {
    id: 'integrateur',
    nom: 'Intégrateur AV',
    emoji: '🟡',
    description: 'Concevez et justifiez des installations complètes.',
    etapes: [
      { 
        module: 'Labo ADC', 
        fichier: 'labo-adc.html', 
        key: 'adc',
        consigne: '🏢 Optimisation réseau : Ajoutez un bruit de quantification (12 bits). Ajustez la QoS simulée pour que le signal traverse le switch.',
        conseil: 'Concentrez-vous sur la chaîne audio et les calculateurs.'
      },
      { 
        module: 'Mission Dante — Niveau 2', 
        fichier: 'dante-niveau-2.html', 
        key: 'dante2',
        consigne: '🛠 QoS et Multicast : Activez l\'IGMP snooping et ajustez la QoS pour stabiliser le réseau saturé.',
        conseil: 'Maîtrisez les réseaux administrés et le diagnostic.'
      }
    ],
    badge: '🟡 Concepteur AV'
  },
  certification: {
    id: 'certification',
    nom: 'Certification',
    emoji: '🔴',
    description: 'Préparez une certification complète avec autoévaluation.',
    etapes: [
      { 
        module: 'Labo ADC', 
        fichier: 'labo-adc.html', 
        key: 'adc',
        consigne: '🎓 Examen : Le signal est dégradé (aliasing + saturation). Trouvez la cause et corrigez en moins de 60 secondes.',
        conseil: 'Tous les réglages et le mode guidé.'
      },
      { 
        module: 'Mission Dante — Niveau 2', 
        fichier: 'dante-niveau-2.html', 
        key: 'dante2',
        consigne: '🎓 Examen : Le lien primaire est coupé. Basculez sur le secondaire et expliquez le processus.',
        conseil: 'Toutes les manipulations avancées.'
      }
    ],
    badge: '🔴 Certification Labo AV'
  }
};

// === FONCTIONS ===
function getParcoursActif() {
  const id = localStorage.getItem('laboParcours');
  return PARCOURS[id] || null;
}

function setParcoursActif(id) {
  if (PARCOURS[id]) {
    localStorage.setItem('laboParcours', id);
    window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
  }
}

function isEtapeComplete(etape) {
  if (!etape.key) return false;
  return localStorage.getItem('laboProgress_' + etape.key) === 'done';
}

function completeEtape(key) {
  localStorage.setItem('laboProgress_' + key, 'done');
  localStorage.setItem('laboProgressUpdate', Date.now());
}

function resetParcours() {
  const path = getParcoursActif();
  if (!path) return;
  path.etapes.forEach(etape => {
    if (etape.key) localStorage.removeItem('laboProgress_' + etape.key);
  });
  window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
}
