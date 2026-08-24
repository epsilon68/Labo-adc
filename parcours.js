// parcours.js — Définition des parcours pédagogiques
const PARCOURS = {
  debutant: {
    id: 'debutant',
    nom: 'Débutant',
    emoji: '🟢',
    description: 'Découvrez l’audio numérique et les réseaux audio pas à pas.',
    etapes: [
      { module: 'Labo ADC', fichier: 'labo-adc.html', conseil: 'Utilisez le mode guidé et les presets d’usine.' },
      { module: 'Mission Dante — Niveau 1', fichier: 'dante.html', conseil: 'Consultez le glossaire à chaque nouveau terme.' },
      { module: 'Quiz AV & Dante', fichier: null, conseil: 'Disponible prochainement.' },
      { module: 'Mission AV-01', fichier: 'installation-av.html', conseil: 'Observez la chaîne complète sans obligation de tout régler.' }
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
      { module: 'Mission Dante — Niveau 1', fichier: 'dante.html', conseil: 'Créez des subscriptions et vérifiez le clock.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Comprenez le multicast, la QoS et PTP.' },
      { module: 'Calculateurs AV (dans Labo ADC)', fichier: 'labo-adc.html', conseil: 'Travaillez latence, débit et alignement.' },
      { module: 'Mission AV-01', fichier: 'installation-av.html', conseil: 'Mettez en pratique dans une salle complète.' }
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
      { module: 'Mission AV-01', fichier: 'installation-av.html', conseil: 'Concevez la salle et justifiez chaque paramètre.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Maîtrisez les réseaux administrés et le diagnostic.' },
      { module: 'Mission Dante — Niveau 1', fichier: 'dante.html', conseil: 'Révision rapide si nécessaire.' },
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
      { module: 'Mission Dante — Niveau 1', fichier: 'dante.html', conseil: 'Toutes les manipulations.' },
      { module: 'Mission Dante — Niveau 2', fichier: 'dante-niveau-2.html', conseil: 'Toutes les manipulations avancées.' },
      { module: 'Mission AV-01', fichier: 'installation-av.html', conseil: 'Installation complète.' },
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
    // Émettre un événement pour mettre à jour l'interface
    window.dispatchEvent(new CustomEvent('laboParcoursUpdate'));
  }
}
