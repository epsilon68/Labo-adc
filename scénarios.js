// scenarios.js — Définit la progression réelle entre les niveaux
const SCENARIOS = {
  // =============================================
  // MODULE : Labo ADC
  // =============================================
  'adc-debutant-0': {
    moduleType: 'adc',
    title: '🔊 Découverte du son numérique',
    instruction: 'Observez le signal analogique (sinusoïde) et sa version échantillonnée. Cliquez sur "Démarrer" pour lancer la visualisation.',
    ui: {
      showWaveform: true,
      showSpectrum: false,
      showSamplingControl: false,
      showQuantizationControl: false,
      showBitrateCalc: false,
      showPresets: true,
      showSimulation: true
    },
    params: { freq: 440, sampleRate: 8000, bits: 8 },
    validation: { type: 'button', target: 'demarrer' },
    successMessage: '✅ Vous comprenez la différence entre signal continu et échantillonné. Passez à l\'étape suivante !'
  },
  'adc-technicien-0': {
    moduleType: 'adc',
    title: '🔧 Réglages et débit binaire',
    instruction: 'Réglez les curseurs pour que la fréquence d\'échantillonnage soit strictement > 2× la fréquence du signal (Nyquist). Puis calculez le débit binaire. Validez quand le débit affiché est correct.',
    ui: {
      showWaveform: true,
      showSpectrum: true,
      showSamplingControl: true,
      showQuantizationControl: true,
      showBitrateCalc: true,
      showPresets: false,
      showSimulation: true
    },
    params: { freq: 1000, sampleRate: 48000, bits: 24 },
    validation: { type: 'formula', expression: 'samplingRate * bits' },
    successMessage: '✅ Parfait ! Vous maîtrisez la relation échantillonnage/quantification/débit.'
  },
  'adc-integrateur-0': {
    moduleType: 'adc',
    title: '🏢 Optimisation réseau',
    instruction: 'Ajoutez un bruit de quantification (réduisez les bits à 12). Ajustez la QoS simulée pour que le signal traverse le switch sans perte (vert).',
    ui: {
      showWaveform: true,
      showSpectrum: true,
      showSamplingControl: true,
      showQuantizationControl: true,
      showBitrateCalc: true,
      showPresets: false,
      showSimulation: true,
      showNetworkQoS: true
    },
    params: { freq: 1000, sampleRate: 48000, bits: 12 },
    validation: { type: 'qos', target: 80 },
    successMessage: '✅ Le signal passe ! Vous comprenez l\'impact du débit sur le réseau.'
  },
  'adc-certification-0': {
    moduleType: 'adc',
    title: '🎓 Examen : Diagnostic complet',
    instruction: 'Le signal est dégradé (aliasing + saturation). Trouvez la cause et corrigez les paramètres en moins de 60 secondes.',
    ui: {
      showWaveform: true,
      showSpectrum: true,
      showSamplingControl: true,
      showQuantizationControl: true,
      showBitrateCalc: true,
      showPresets: false,
      showSimulation: true,
      showNetworkQoS: true,
      showTimer: true
    },
    params: { freq: 5000, sampleRate: 8000, bits: 8 },
    validation: { type: 'timer_repair', targetFreq: 5000, targetSampleRate: 48000, targetBits: 24 },
    successMessage: '🏆 Félicitations ! Vous êtes prêt pour la certification audio numérique.'
  },

  // =============================================
  // MODULE : Dante Niveau 2
  // =============================================
  'dante-debutant-0': {
    moduleType: 'dante',
    title: '🌐 Découverte du Clocking Dante',
    instruction: 'Observez l\'animation des horloges. Deux appareils cherchent un Master. Cliquez sur "Élire" pour lancer l\'élection BMC.',
    ui: { showClockAnimation: true, showRouting: false, showQoS: false, showRedundancy: false, showFlows: false },
    validation: { type: 'button', target: 'elire' },
    successMessage: '✅ Le Grandmaster est élu ! Vous avez compris le principe d\'horloge maître.'
  },
  'dante-technicien-0': {
    moduleType: 'dante',
    title: '🔧 Routing et Subscriptions',
    instruction: 'Faites glisser les flux de l\'émetteur (Tx) vers le récepteur (Rx). Abonnez au moins 2 canaux pour valider.',
    ui: { showClockAnimation: true, showRouting: true, showQoS: false, showRedundancy: false, showFlows: true },
    validation: { type: 'subscriptions', target: 2 },
    successMessage: '✅ Les 2 canaux sont routés ! Vous savez créer une matrice audio Dante.'
  },
  'dante-integrateur-0': {
    moduleType: 'dante',
    title: '🛠 QoS et Multicast',
    instruction: 'Le réseau est saturé (multicast sans IGMP). Activez l\'IGMP snooping et ajustez la QoS (DSCP) pour que les paquets prioritaires (verts) passent.',
    ui: { showClockAnimation: true, showRouting: true, showQoS: true, showRedundancy: false, showFlows: true },
    validation: { type: 'qos_dante', target: 'igmp_on' },
    successMessage: '✅ Réseau stabilisé ! Vous maîtrisez la gestion des flux multicast.'
  },
  'dante-certification-0': {
    moduleType: 'dante',
    title: '🎓 Examen : Panne et Redondance',
    instruction: 'Le lien primaire est coupé (simulation). Basculez manuellement sur le secondaire et expliquez le processus.',
    ui: { showClockAnimation: true, showRouting: true, showQoS: true, showRedundancy: true, showFlows: true },
    validation: { type: 'redundancy', target: 'secondary_activated' },
    successMessage: '🏆 Réseau Dante certifié ! Vous gérez la redondance comme un expert.'
  }
};
