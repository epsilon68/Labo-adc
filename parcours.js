// parcours.js — Définition des parcours pédagogiques (version allégée)
const PARCOURS = {
  debutant: {
    id: 'debutant',
    nom: 'Débutant',
    emoji: '🟢',
    description: 'Découvrez l’audio numérique et les réseaux audio pas à pas.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', conseil: 'Utilisez le mode guidé et les presets d’usine.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Découvrez les bases des réseaux Dante.' },
      { module: 'Quiz AV & Dante', fichier: null, conseil: 'Disponible prochainement.' }
    ],
    badge: '🟢 Explorateur audio'
  },
  technicien: {
    id: 'technicien',
    nom: 'Technicien son',
    emoji: '🔵',
    description: 'Maîtrisez les réglages et le diagnostic Dante simple.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', conseil: 'Explorez librement, comparez les reconstructions.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Comprenez le multicast, la QoS et PTP.' },
      { module: 'Calculateurs AV (dans Labo ADC)', fichier: 'labo-adc.html', conseil: 'Travaillez latence, débit et alignement.' }
    ],
    badge: '🔵 Technicien Dante certifié'
  },
  integrateur: {
    id: 'integrateur',
    nom: 'Intégrateur AV',
    emoji: '🟡',
    description: 'Concevez et justifiez des installations complètes.',
    etapes: [
      { module: 'Labo ADC (calculateurs)', fichier: 'labo-adc.html', conseil: 'Concentrez-vous sur la chaîne audio et les calculateurs.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Maîtrisez les réseaux administrés et le diagnostic.' },
      { module: 'Quiz AV & Dante', fichier: null, conseil: 'Validez vos connaissances.' }
    ],
    badge: '🟡 Concepteur AV'
  },
  certification: {
    id: 'certification',
    nom: 'Certification',
    emoji: '🔴',
    description: 'Préparez une certification complète avec autoévaluation.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', conseil: 'Tous les réglages et le mode guidé.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Toutes les manipulations avancées.' },
      { module: 'Quiz final', fichier: null, conseil: 'Bientôt disponible.' }
    ],
    badge: '🔴 Certification Labo AV'
  }
};

// Récupérer le parcours choisi
function getParcoursActif() {
  const id = localStorage.getItem('laboParcours');
  return PARCOURS[id] || PARCOURS.debutant;
}

// Enregistrer le parcours
function setParcoursActif(id) {
  if (PARCOURS[id]) {
    localStorage.setItem('laboParcours', id);
    window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
  }
}
