// parcours.js — Définition des parcours pédagogiques (version refonte Path-First)
const PARCOURS = {
  debutant: {
    id: 'debutant',
    nom: 'Débutant',
    emoji: '🟢',
    description: 'Découvrez l’audio numérique et les réseaux audio pas à pas.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', key: 'adc', conseil: 'Utilisez le mode guidé et les presets d’usine.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', key: 'dante2', conseil: 'Découvrez les bases des réseaux Dante.' },
      { module: 'Quiz AV & Dante', fichier: null, key: 'quiz', conseil: 'Disponible prochainement.' }
    ],
    badge: '🟢 Explorateur audio'
  },
  technicien: {
    id: 'technicien',
    nom: 'Technicien son',
    emoji: '🔵',
    description: 'Maîtrisez les réglages et le diagnostic Dante simple.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', key: 'adc', conseil: 'Explorez librement, comparez les reconstructions.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', key: 'dante2', conseil: 'Comprenez le multicast, la QoS et PTP.' },
      { module: 'Calculateurs AV (dans Labo ADC)', fichier: 'labo-adc.html', key: 'calculateurs', conseil: 'Travaillez latence, débit et alignement.' }
    ],
    badge: '🔵 Technicien Dante certifié'
  },
  integrateur: {
    id: 'integrateur',
    nom: 'Intégrateur AV',
    emoji: '🟡',
    description: 'Concevez et justifiez des installations complètes.',
    etapes: [
      { module: 'Labo ADC (calculateurs)', fichier: 'labo-adc.html', key: 'calculateurs', conseil: 'Concentrez-vous sur la chaîne audio et les calculateurs.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', key: 'dante2', conseil: 'Maîtrisez les réseaux administrés et le diagnostic.' },
      { module: 'Quiz AV & Dante', fichier: null, key: 'quiz', conseil: 'Validez vos connaissances.' }
    ],
    badge: '🟡 Concepteur AV'
  },
  certification: {
    id: 'certification',
    nom: 'Certification',
    emoji: '🔴',
    description: 'Préparez une certification complète avec autoévaluation.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', key: 'adc', conseil: 'Tous les réglages et le mode guidé.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', key: 'dante2', conseil: 'Toutes les manipulations avancées.' },
      { module: 'Quiz final', fichier: null, key: 'quiz_final', conseil: 'Bientôt disponible.' }
    ],
    badge: '🔴 Certification Labo AV'
  }
};

// Récupérer le parcours choisi
function getParcoursActif() {
  const id = localStorage.getItem('laboParcours');
  return PARCOURS[id] || null;
}

// Enregistrer le parcours
function setParcoursActif(id) {
  if (PARCOURS[id]) {
    localStorage.setItem('laboParcours', id);
    window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
  }
}

// Vérifier si une étape est terminée
function isEtapeComplete(etape) {
  if (!etape.key) return false;
  return localStorage.getItem('laboProgress_' + etape.key) === 'done';
}

// Marquer une étape comme terminée (appelé depuis les pages modules ou manuellement)
function completeEtape(key) {
  localStorage.setItem('laboProgress_' + key, 'done');
  window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
}

// Réinitialiser la progression d'un parcours
function resetParcours() {
  const path = getParcoursActif();
  if (!path) return;
  path.etapes.forEach(etape => {
    if (etape.key) localStorage.removeItem('laboProgress_' + etape.key);
  });
  window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
}
