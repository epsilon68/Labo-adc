// glossary.js — Dictionnaire contextuel avec liens externes
const GLOSSARY = {
  "Aliasing": {
    definition: "Phénomène de repliement de spectre. Lorsque la fréquence d'échantillonnage est inférieure à 2× la fréquence du signal, des fréquences parasites (alias) apparaissent.",
    url: "https://fr.wikipedia.org/wiki/Repliement_de_spectre"
  },
  "Échantillonnage": {
    definition: "Opération qui consiste à prélever la valeur d'un signal analogique à des intervalles réguliers (période d'échantillonnage). La fréquence d'échantillonnage (Hz) détermine la bande passante capturée.",
    url: "https://fr.wikipedia.org/wiki/%C3%89chantillonnage_(signal)"
  },
  "Quantification": {
    definition: "Opération qui arrondit la valeur de chaque échantillon sur un nombre fini de niveaux (ex: 16 bits = 65536 niveaux). Plus le nombre de bits est élevé, plus la dynamique et la résolution sont grandes.",
    url: "https://fr.wikipedia.org/wiki/Quantification_(signal)"
  },
  "Théorème de Nyquist-Shannon": {
    definition: "Pour reconstruire parfaitement un signal, il faut que la fréquence d'échantillonnage soit strictement supérieure à 2× la fréquence maximale du signal (fréquence de Nyquist).",
    url: "https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_d%27%C3%A9chantillonnage_de_Nyquist-Shannon"
  },
  "Débit binaire (bitrate)": {
    definition: "Quantité de données transmise par unité de temps. Calcul : Fréquence d'échantillonnage × Résolution (bits) × Nombre de canaux.",
    url: "https://fr.wikipedia.org/wiki/D%C3%A9bit_binaire"
  },
  "PTP (Precision Time Protocol)": {
    definition: "Protocole IEEE 1588 utilisé dans Dante pour synchroniser les horloges des appareils réseau avec une précision inférieure à la microseconde. Un 'Grandmaster' est élu automatiquement via l'algorithme BMC.",
    url: "https://fr.wikipedia.org/wiki/Precision_Time_Protocol"
  },
  "BMC (Best Master Clock)": {
    definition: "Algorithme qui élit l'horloge maître (Grandmaster) dans un réseau PTP en comparant la précision, la stabilité et les priorités des horloges.",
    url: "https://www.audinate.com/learning/faqs/what-is-dante-clock-synchronization"
  },
  "Grandmaster (Horloge maître)": {
    definition: "L'appareil qui fournit la référence temporelle à tout le réseau Dante. Tous les autres appareils (slaves) se synchronisent sur lui.",
    url: "https://www.audinate.com/learning/faqs/dante-clock-synchronization"
  },
  "QoS (Quality of Service)": {
    definition: "Mécanisme de priorisation des paquets réseau. Les flux audio Dante sont marqués avec des priorités élevées (DSCP) pour garantir une latence faible et éviter les pertes.",
    url: "https://fr.wikipedia.org/wiki/Qualit%C3%A9_de_service"
  },
  "IGMP (Internet Group Management Protocol)": {
    definition: "Protocole qui gère les abonnements aux flux multicast. Permet aux switches de ne transmettre les flux audio qu'aux ports qui en ont fait la demande, évitant la saturation du réseau.",
    url: "https://fr.wikipedia.org/wiki/Internet_Group_Management_Protocol"
  },
  "Multicast": {
    definition: "Mode de transmission où un flux audio est envoyé à plusieurs récepteurs simultanément, sans dupliquer les données. Optimal pour distribuer un même signal (ex: son de scène) à plusieurs consoles.",
    url: "https://fr.wikipedia.org/wiki/Multicast"
  },
  "Unicast": {
    definition: "Transmission point-à-point. Un flux audio est envoyé d'un émetteur vers un seul récepteur. Chaque récepteur reçoit une copie unique du flux.",
    url: "https://fr.wikipedia.org/wiki/Unicast"
  },
  "Latence (Dante)": {
    definition: "Temps de transit d'un paquet audio entre l'émetteur et le récepteur. Dans Dante, réglable de 150 µs à 5 ms. Une latence trop basse peut causer des pertes de paquets sur les réseaux instables.",
    url: "https://www.audinate.com/learning/faqs/dante-latency"
  },
  "Redondance (Dante)": {
    definition: "Le réseau Dante peut utiliser deux liaisons Ethernet distinctes (primaire et secondaire). En cas de défaillance du primaire, le flux bascule automatiquement sur le secondaire sans coupure audio (0 temps de bascule).",
    url: "https://www.audinate.com/learning/faqs/dante-redundancy"
  },
  "Subscription (Abonnement)": {
    definition: "Action de relier une sortie de flux Dante (Tx) à une entrée (Rx). C'est l'équivalent du 'routing' dans une matrice audio, mais sur le réseau.",
    url: "https://www.audinate.com/learning/faqs/dante-routing"
  },
  "Flux (Flow)": {
    definition: "Un flux Dante regroupe jusqu'à 4 canaux audio (8 avec Dante Ultimo) sur une seule adresse multicast ou unicast.",
    url: "https://www.audinate.com/learning/faqs/dante-flows"
  },
  "DSCP (Differentiated Services Code Point)": {
    definition: "Marquage de priorité dans l'en-tête IPv4/IPv6. Dante utilise des valeurs spécifiques (EF, AF41, etc.) pour que les switches traitent l'audio en priorité absolue.",
    url: "https://fr.wikipedia.org/wiki/Differentiated_Services_Code_Point"
  },
  "FFT (Transformée de Fourier)": {
    definition: "Algorithme qui décompose un signal temporel en ses fréquences composantes. Utilisé pour visualiser le spectre audio.",
    url: "https://fr.wikipedia.org/wiki/Transform%C3%A9e_de_Fourier_rapide"
  },
  "Spectre audio": {
    definition: "Représentation graphique de l'amplitude des fréquences qui composent un signal. L'axe horizontal est la fréquence (Hz), l'axe vertical l'amplitude (dB).",
    url: "https://fr.wikipedia.org/wiki/Spectre_sonore"
  },
  "Bruit de quantification": {
    definition: "Erreur d'arrondi introduite par la quantification. Plus le nombre de bits est faible, plus le bruit est fort. Le rapport signal/bruit (SNR) approximatif est de 6.02 × N bits + 1.76 dB.",
    url: "https://fr.wikipedia.org/wiki/Bruit_de_quantification"
  },
  "Jitter": {
    definition: "Variation aléatoire de la période d'un signal d'horloge. Dans Dante, un jitter trop élevé dégrade la qualité audio (distorsion, pops). PTP minimise ce phénomène.",
    url: "https://fr.wikipedia.org/wiki/Gigue_(signal)"
  },
  "Switch (réseau)": {
    definition: "Équipement qui achemine les paquets Ethernet vers les bons ports. Dans un réseau Dante, il doit être géré (Gigabit, IGMP snooping, QoS prioritaire).",
    url: "https://fr.wikipedia.org/wiki/Commuteur_(r%C3%A9seau)"
  },
  "Packet (Paquet)": {
    definition: "Unité de données transmise sur le réseau. L'audio Dante est découpé en paquets UDP contenant plusieurs échantillons (timer tick).",
    url: "https://fr.wikipedia.org/wiki/Paquet_(r%C3%A9seau)"
  },
  "Broadcast": {
    definition: "Transmission d'un paquet à tous les appareils du réseau. À éviter en Dante car cela sature inutilement la bande passante. On lui préfère le multicast ou l'unicast.",
    url: "https://fr.wikipedia.org/wiki/Broadcast"
  },
  "AES67": {
    definition: "Norme de transport audio IP interopérable. Dante est compatible AES67, ce qui permet de connecter des équipements d'autres marques (AVB, RAVENNA).",
    url: "https://fr.wikipedia.org/wiki/AES67"
  }
};

// Fonction : ouvrir le popover contextuel
function showGlossaryPopover(term, event) {
  const entry = GLOSSARY[term];
  if (!entry) return;
  // Supprimer l'ancien popover s'il existe
  const old = document.getElementById('glossaryPopover');
  if (old) old.remove();

  const popover = document.createElement('div');
  popover.id = 'glossaryPopover';
  popover.style.cssText = `
    position: fixed;
    max-width: 380px;
    background: #161b22;
    border: 1px solid #6e40c9;
    border-radius: 12px;
    padding: 18px 20px;
    z-index: 10000;
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    animation: popoverFadeIn 0.2s ease;
    top: ${Math.min(event.clientY + 20, window.innerHeight - 200)}px;
    left: ${Math.min(event.clientX + 10, window.innerWidth - 400)}px;
  `;
  popover.innerHTML = `
    <div style="font-weight:700; color:#d2a8ff; margin-bottom:6px; font-size:0.9rem;">${term}</div>
    <div style="color:#e6edf3; font-size:0.85rem; line-height:1.5; margin-bottom:10px;">${entry.definition}</div>
    <a href="${entry.url}" target="_blank" rel="noopener noreferrer" style="color:#58a6ff; font-size:0.8rem; text-decoration:none; border-top:1px solid #30363d; padding-top:8px; display:inline-block; width:100%;">
      🔗 En savoir plus (source externe)
    </a>
  `;
  document.body.appendChild(popover);

  // Fermeture au clic extérieur
  const close = (e) => {
    if (!popover.contains(e.target) && e.target !== event.target) {
      popover.remove();
      document.removeEventListener('click', close);
    }
  };
  // On attend un tick pour ne pas fermer immédiatement
  setTimeout(() => document.addEventListener('click', close), 50);
}

// Injecter le style d'animation
const style = document.createElement('style');
style.textContent = `
  @keyframes popoverFadeIn {
    from { opacity:0; transform:scale(0.95) translateY(-8px); }
    to { opacity:1; transform:scale(1) translateY(0); }
  }
  .glossary-term {
    color: #d2a8ff;
    border-bottom: 1px dashed #6e40c9;
    cursor: pointer;
    transition: all 0.15s;
  }
  .glossary-term:hover {
    background: rgba(110,64,201,0.15);
    border-bottom-color: #bc8cff;
  }
`;
document.head.appendChild(style);
