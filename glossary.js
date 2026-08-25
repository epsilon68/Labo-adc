// glossary.js — Glossaire complet (75+ termes) avec liens externes
const GLOSSARY = {
  // ============================================================
  // 1. SIGNAL & PHYSIQUE AUDIO
  // ============================================================
  "Signal analogique": {
    definition: "Signal continu variant dans le temps (ex: onde sonore, tension électrique). Il peut prendre une infinité de valeurs.",
    url: "https://fr.wikipedia.org/wiki/Signal_analogique"
  },
  "Signal numérique": {
    definition: "Signal discret représenté par des nombres binaires (0/1). Il est obtenu par échantillonnage et quantification d'un signal analogique.",
    url: "https://fr.wikipedia.org/wiki/Signal_num%C3%A9rique"
  },
  "Fréquence (Hz)": {
    definition: "Nombre de cycles par seconde d'un signal périodique. L'oreille humaine perçoit environ 20 Hz à 20 kHz.",
    url: "https://fr.wikipedia.org/wiki/Fr%C3%A9quence"
  },
  "Amplitude": {
    definition: "Valeur maximale d'un signal. En audio, elle correspond au volume (pression acoustique ou tension électrique).",
    url: "https://fr.wikipedia.org/wiki/Amplitude"
  },
  "dB (décibel)": {
    definition: "Unité logarithmique exprimant un rapport. En audio, on utilise dB SPL (pression), dBu (tension), dBFS (numérique).",
    url: "https://fr.wikipedia.org/wiki/D%C3%A9cibel"
  },
  "dBFS (Full Scale)": {
    definition: "Échelle de mesure numérique où 0 dBFS correspond au niveau maximal avant écrêtage (clipping). Tous les niveaux sont négatifs.",
    url: "https://fr.wikipedia.org/wiki/DBFS"
  },
  "dBu": {
    definition: "Unité de tension audio professionnelle. 0 dBu ≈ 0.775 V (RMS). Utilisée dans les consoles et équipements pro.",
    url: "https://fr.wikipedia.org/wiki/DBu"
  },
  "Phase": {
    definition: "Position temporelle d'une onde par rapport à une référence. Un déphasage de 180° annule le signal (inversion de polarité).",
    url: "https://fr.wikipedia.org/wiki/Phase_(onde)"
  },
  "Harmonique": {
    definition: "Fréquence multiple de la fondamentale. Les harmoniques donnent le timbre d'un instrument (ex: un carré contient des harmoniques impaires).",
    url: "https://fr.wikipedia.org/wiki/Harmonique"
  },
  "THD (Distorsion)": {
    definition: "Taux de distorsion harmonique. Mesure les harmoniques parasites ajoutées par un équipement. Plus il est bas (<0.01%) meilleur est l'équipement.",
    url: "https://fr.wikipedia.org/wiki/Taux_de_distortion_harmonique"
  },

  // ============================================================
  // 2. NUMÉRIQUE & ÉCHANTILLONNAGE
  // ============================================================
  "Échantillonnage": {
    definition: "Prélèvement de la valeur d'un signal à intervalles réguliers. La fréquence d'échantillonnage (Hz) détermine la bande passante capturée.",
    url: "https://fr.wikipedia.org/wiki/%C3%89chantillonnage_(signal)"
  },
  "Quantification": {
    definition: "Arrondi de chaque échantillon sur un nombre fini de niveaux (ex: 16 bits = 65536 niveaux). Plus le nombre de bits est élevé, plus la résolution est grande.",
    url: "https://fr.wikipedia.org/wiki/Quantification_(signal)"
  },
  "Théorème de Nyquist-Shannon": {
    definition: "Pour reconstruire parfaitement un signal, la fréquence d'échantillonnage doit être strictement supérieure à 2× la fréquence maximale du signal.",
    url: "https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_d%27%C3%A9chantillonnage_de_Nyquist-Shannon"
  },
  "Aliasing": {
    definition: "Phénomène de repliement de spectre. Lorsque la fréquence d'échantillonnage est < 2× la fréquence du signal, des fréquences parasites (alias) apparaissent.",
    url: "https://fr.wikipedia.org/wiki/Repliement_de_spectre"
  },
  "Bruit de quantification": {
    definition: "Erreur d'arrondi introduite par la quantification. Le rapport signal/bruit (SNR) approximatif est de 6.02 × N bits + 1.76 dB.",
    url: "https://fr.wikipedia.org/wiki/Bruit_de_quantification"
  },
  "Dither": {
    definition: "Ajout intentionnel d'un bruit de très faible niveau avant quantification pour linéariser la réponse et éviter les distorsions à bas niveau.",
    url: "https://fr.wikipedia.org/wiki/Dither"
  },
  "Débit binaire (bitrate)": {
    definition: "Quantité de données transmise par unité de temps. Calcul : Fréquence d'échantillonnage × Résolution (bits) × Nombre de canaux.",
    url: "https://fr.wikipedia.org/wiki/D%C3%A9bit_binaire"
  },
  "Filtre anti-aliasing": {
    definition: "Filtre passe-bas placé avant l'échantillonneur pour éliminer les fréquences > Fs/2, évitant le repliement de spectre.",
    url: "https://fr.wikipedia.org/wiki/Filtre_anti-repliement"
  },
  "FFT (Transformée de Fourier)": {
    definition: "Algorithme qui décompose un signal temporel en ses fréquences composantes. Utilisé pour visualiser le spectre audio.",
    url: "https://fr.wikipedia.org/wiki/Transform%C3%A9e_de_Fourier_rapide"
  },
  "Spectre audio": {
    definition: "Représentation graphique de l'amplitude des fréquences qui composent un signal. L'axe horizontal est la fréquence (Hz), l'axe vertical l'amplitude (dB).",
    url: "https://fr.wikipedia.org/wiki/Spectre_sonore"
  },

  // ============================================================
  // 3. RÉSEAU & INFRASTRUCTURES
  // ============================================================
  "Paquet (Packet)": {
    definition: "Unité de données transmise sur le réseau. L'audio Dante est découpé en paquets UDP contenant plusieurs échantillons.",
    url: "https://fr.wikipedia.org/wiki/Paquet_(r%C3%A9seau)"
  },
  "Switch (réseau)": {
    definition: "Équipement qui achemine les paquets Ethernet vers les bons ports. Dans un réseau Dante, il doit être géré (Gigabit, IGMP snooping, QoS).",
    url: "https://fr.wikipedia.org/wiki/Commuteur_(r%C3%A9seau)"
  },
  "Router (Routeur)": {
    definition: "Équipement qui interconnecte différents sous-réseaux (VLAN). Achemine les paquets en fonction de leur adresse IP.",
    url: "https://fr.wikipedia.org/wiki/Routeur"
  },
  "VLAN": {
    definition: "Virtual Local Area Network. Permet de découper logiquement un réseau physique en plusieurs sous-réseaux isolés (ex: séparer l'audio du trafic IT).",
    url: "https://fr.wikipedia.org/wiki/VLAN"
  },
  "Subnet (Sous-réseau)": {
    definition: "Division logique d'un réseau IP. Le masque de sous-réseau (ex: 255.255.255.0) définit la plage d'adresses locales.",
    url: "https://fr.wikipedia.org/wiki/Sous-r%C3%A9seau"
  },
  "Adresse IP": {
    definition: "Identifiant unique attribué à chaque appareil sur un réseau IP. Exemple : 192.168.1.100.",
    url: "https://fr.wikipedia.org/wiki/Adresse_IP"
  },
  "Adresse MAC": {
    definition: "Identifiant matériel unique gravé dans chaque interface réseau (ex: 00:1A:2B:3C:4D:5E). Utilisé au niveau de la couche 2 (Ethernet).",
    url: "https://fr.wikipedia.org/wiki/Adresse_MAC"
  },
  "UDP (User Datagram Protocol)": {
    definition: "Protocole de transport rapide mais non fiable (sans accusé de réception). Idéal pour l'audio temps réel car les retransmissions ne servent à rien.",
    url: "https://fr.wikipedia.org/wiki/User_Datagram_Protocol"
  },
  "TCP (Transmission Control Protocol)": {
    definition: "Protocole de transport fiable (avec accusés et retransmission). Utilisé pour la configuration et le contrôle (Dante Controller), mais pas pour l'audio en temps réel.",
    url: "https://fr.wikipedia.org/wiki/Transmission_Control_Protocol"
  },
  "Multicast": {
    definition: "Transmission d'un flux à plusieurs récepteurs simultanément, sans dupliquer les données. Optimal pour distribuer un même signal (ex: son de scène) à plusieurs consoles.",
    url: "https://fr.wikipedia.org/wiki/Multicast"
  },
  "Unicast": {
    definition: "Transmission point-à-point. Un flux audio est envoyé d'un émetteur vers un seul récepteur. Chaque récepteur reçoit une copie unique.",
    url: "https://fr.wikipedia.org/wiki/Unicast"
  },
  "Broadcast": {
    definition: "Transmission d'un paquet à tous les appareils du réseau. À éviter en Dante car cela sature la bande passante.",
    url: "https://fr.wikipedia.org/wiki/Broadcast"
  },
  "IGMP (Internet Group Management Protocol)": {
    definition: "Protocole qui gère les abonnements aux flux multicast. Permet aux switches de ne transmettre l'audio qu'aux ports qui en ont fait la demande.",
    url: "https://fr.wikipedia.org/wiki/Internet_Group_Management_Protocol"
  },
  "IGMP Snooping": {
    definition: "Fonctionnalité des switches qui analyse les échanges IGMP pour n'envoyer les flux multicast que vers les ports abonnés, optimisant la bande passante.",
    url: "https://fr.wikipedia.org/wiki/IGMP_snooping"
  },
  "QoS (Quality of Service)": {
    definition: "Mécanisme de priorisation des paquets. Les flux audio Dante sont marqués avec des priorités élevées (DSCP) pour garantir une latence faible.",
    url: "https://fr.wikipedia.org/wiki/Qualit%C3%A9_de_service"
  },
  "DSCP (Differentiated Services Code Point)": {
    definition: "Marquage de priorité dans l'en-tête IP. Dante utilise des valeurs spécifiques (EF, AF41) pour que les switches traitent l'audio en priorité absolue.",
    url: "https://fr.wikipedia.org/wiki/Differentiated_Services_Code_Point"
  },
  "PoE (Power over Ethernet)": {
    definition: "Alimentation électrique transmise via le câble Ethernet. Permet d'alimenter des microphones, haut-parleurs IP ou switchs sans prise secteur.",
    url: "https://fr.wikipedia.org/wiki/Power_over_Ethernet"
  },
  "Fibre optique": {
    definition: "Média de transmission utilisant la lumière. Permet de parcourir de très longues distances (plusieurs km) sans perte de signal et sans interférences électromagnétiques.",
    url: "https://fr.wikipedia.org/wiki/Fibre_optique"
  },
  "SFP (Small Form-factor Pluggable)": {
    definition: "Module transceiver enfichable qui convertit les signaux électriques en signaux optiques (ou vice-versa). Permet de connecter des câbles fibre ou cuivre à un switch.",
    url: "https://fr.wikipedia.org/wiki/Small_Form-factor_Pluggable"
  },
  "Cat5e / Cat6 / Cat7": {
    definition: "Catégories de câbles Ethernet. Cat5e = 1 Gbps, Cat6 = 10 Gbps sur 55m, Cat7 = 10 Gbps sur 100m avec blindage renforcé. Pour Dante, Cat5e est le minimum.",
    url: "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie_de_c%C3%A2ble_r%C3%A9seau"
  },

  // ============================================================
  // 4. DANTE & PROTOCOLES SPÉCIFIQUES
  // ============================================================
  "Dante": {
    definition: "Protocole de transport audio sur IP développé par Audinate. Utilise le réseau Ethernet standard pour véhiculer des flux audio multicanal avec une latence ultra-faible.",
    url: "https://www.audinate.com/learning/faqs/what-is-dante"
  },
  "PTP (Precision Time Protocol)": {
    definition: "Protocole IEEE 1588 utilisé dans Dante pour synchroniser les horloges des appareils avec une précision < 1 µs. Un 'Grandmaster' est élu automatiquement via BMC.",
    url: "https://fr.wikipedia.org/wiki/Precision_Time_Protocol"
  },
  "BMC (Best Master Clock)": {
    definition: "Algorithme qui élit l'horloge maître (Grandmaster) dans un réseau PTP en comparant la précision, la stabilité et les priorités des horloges.",
    url: "https://www.audinate.com/learning/faqs/what-is-dante-clock-synchronization"
  },
  "Grandmaster (Horloge maître)": {
    definition: "Appareil qui fournit la référence temporelle à tout le réseau Dante. Tous les autres appareils (slaves) se synchronisent sur lui.",
    url: "https://www.audinate.com/learning/faqs/dante-clock-synchronization"
  },
  "Clock Slave (Horloge esclave)": {
    definition: "Appareil qui se synchronise sur le Grandmaster via PTP. Aucun appareil Dante ne peut fonctionner sans être verrouillé sur une horloge commune.",
    url: "https://www.audinate.com/learning/faqs/dante-clock-synchronization"
  },
  "Subscription (Abonnement)": {
    definition: "Action de relier une sortie de flux Dante (Tx) à une entrée (Rx). C'est l'équivalent du 'routing' dans une matrice audio, mais sur le réseau.",
    url: "https://www.audinate.com/learning/faqs/dante-routing"
  },
  "Flux (Flow)": {
    definition: "Un flux Dante regroupe jusqu'à 4 canaux audio (8 avec Dante Ultimo) sur une seule adresse multicast ou unicast.",
    url: "https://www.audinate.com/learning/faqs/dante-flows"
  },
  "Tx (Transmetteur)": {
    definition: "Appareil ou canal Dante qui envoie un flux audio. Généralement associé à une sortie physique (micro, ligne) ou virtuelle (DVS).",
    url: "https://www.audinate.com/learning/faqs/dante-routing"
  },
  "Rx (Récepteur)": {
    definition: "Appareil ou canal Dante qui reçoit un flux audio. Généralement associé à une entrée physique (enceinte, console) ou virtuelle.",
    url: "https://www.audinate.com/learning/faqs/dante-routing"
  },
  "Latence (Dante)": {
    definition: "Temps de transit d'un paquet audio entre l'émetteur et le récepteur. Dans Dante, réglable de 150 µs à 5 ms. Une latence trop basse peut causer des pertes de paquets.",
    url: "https://www.audinate.com/learning/faqs/dante-latency"
  },
  "Redondance (Dante)": {
    definition: "Le réseau Dante peut utiliser deux liaisons Ethernet distinctes (primaire et secondaire). En cas de défaillance du primaire, le flux bascule sans coupure.",
    url: "https://www.audinate.com/learning/faqs/dante-redundancy"
  },
  "Lien Primaire / Secondaire": {
    definition: "Les deux interfaces réseau des appareils Dante redondants. Le primaire porte le trafic audio et le contrôle. Le secondaire est en veille et prend le relais en cas de panne.",
    url: "https://www.audinate.com/learning/faqs/dante-redundancy"
  },
  "Dante Controller": {
    definition: "Application gratuite d'Audinate pour configurer le routing, visualiser l'horloge, ajuster la latence et diagnostiquer un réseau Dante.",
    url: "https://www.audinate.com/products/software/dante-controller"
  },
  "Dante Virtual Soundcard (DVS)": {
    definition: "Logiciel qui transforme un ordinateur (Mac/PC) en appareil Dante. Permet d'envoyer/recevoir jusqu'à 64 canaux audio via le réseau.",
    url: "https://www.audinate.com/products/software/dante-virtual-soundcard"
  },
  "Dante Via": {
    definition: "Logiciel qui transforme les applications audio (DAW, lecteurs) et les interfaces USB/PCIe en sources Dante, sans matériel dédié.",
    url: "https://www.audinate.com/products/software/dante-via"
  },
  "DDM (Dante Domain Manager)": {
    definition: "Solution de gestion centralisée pour les grands réseaux Dante. Permet la sécurité, les VLAN, les domaines de synchronisation et la supervision.",
    url: "https://www.audinate.com/products/software/dante-domain-manager"
  },
  "AES67": {
    definition: "Norme de transport audio IP interopérable. Dante est compatible AES67, ce qui permet de connecter des équipements d'autres marques (AVB, RAVENNA).",
    url: "https://fr.wikipedia.org/wiki/AES67"
  },
  "RAVENNA": {
    definition: "Protocole audio IP concurrent de Dante, basé sur les normes AES67 et utilisé principalement dans la radiodiffusion (Broadcast).",
    url: "https://fr.wikipedia.org/wiki/RAVENNA"
  },
  "SAP (Session Announcement Protocol)": {
    definition: "Protocole utilisé par Dante pour annoncer la présence des flux sur le réseau. Permet aux récepteurs de découvrir automatiquement les émetteurs.",
    url: "https://www.audinate.com/learning/faqs/dante-discovery"
  },
  "RTP (Real-time Transport Protocol)": {
    definition: "Protocole standard pour le transport de données temps réel (audio/vidéo) sur IP. Dante utilise RTP encapsulé dans UDP.",
    url: "https://fr.wikipedia.org/wiki/Real_Time_Protocol"
  },

  // ============================================================
  // 5. MESURES & DIAGNOSTIC
  // ============================================================
  "Jitter": {
    definition: "Variation aléatoire de la période d'un signal d'horloge. Dans Dante, un jitter trop élevé dégrade la qualité audio (distorsion, pops). PTP minimise ce phénomène.",
    url: "https://fr.wikipedia.org/wiki/Gigue_(signal)"
  },
  "Packet loss (Perte de paquets)": {
    definition: "Lorsque des paquets audio n'atteignent pas leur destination. Cause : bande passante saturée, latence trop basse, switchs non adaptés. Entraîne des coupures sonores.",
    url: "https://fr.wikipedia.org/wiki/Perte_de_paquets"
  },
  "SNR (Rapport signal/bruit)": {
    definition: "Mesure du niveau du signal utile par rapport au bruit de fond. Exprimé en dB. Plus la valeur est élevée, meilleure est la qualité (ex: 120 dB pour un convertisseur haut de gamme).",
    url: "https://fr.wikipedia.org/wiki/Rapport_signal_%C3%A0_bruit"
  },
  "Headroom (Marge)": {
    definition: "Différence entre le niveau de crête d'un signal et le niveau maximal admissible (0 dBFS). Une marge de 12 à 18 dB permet d'éviter l'écrêtage.",
    url: "https://fr.wikipedia.org/wiki/Headroom"
  },
  "Limiteur (Limiter)": {
    definition: "Processeur qui empêche le signal de dépasser un seuil donné (ex: -0.5 dBFS). Utilisé pour protéger les enceintes ou éviter la saturation numérique.",
    url: "https://fr.wikipedia.org/wiki/Limiteur"
  },
  "Compresseur": {
    definition: "Processeur qui réduit la dynamique du signal en atténuant les parties les plus fortes. Utilisé pour rendre le son plus constant et percutant.",
    url: "https://fr.wikipedia.org/wiki/Compresseur_(audio)"
  },

  // ============================================================
  // 6. MATÉRIEL & CONNECTIQUE
  // ============================================================
  "XLR": {
    definition: "Connecteur audio professionnel à 3 broches (masse, chaud, froid). Utilisé pour les microphones, consoles et enceintes actives. Câble blindé pour réduire les parasites.",
    url: "https://fr.wikipedia.org/wiki/XLR"
  },
  "Jack TRS (6.35 mm)": {
    definition: "Connecteur audio asymétrique ou symétrique à 3 points (Tip, Ring, Sleeve). Utilisé pour les instruments, les casques et les liaisons ligne.",
    url: "https://fr.wikipedia.org/wiki/Jack_(connecteur)"
  },
  "RJ45 (Ethernet)": {
    definition: "Connecteur standard pour le réseau Ethernet. Utilisé pour les câbles Cat5e/Cat6/Cat7. Essentiel pour les connexions Dante.",
    url: "https://fr.wikipedia.org/wiki/RJ45"
  },
  "Console audio numérique": {
    definition: "Table de mixage qui traite le signal en numérique (échantillonnage, effets, routing). Les consoles modernes intègrent des cartes Dante ou AES67.",
    url: "https://fr.wikipedia.org/wiki/Table_de_mixage"
  },
  "Microphone": {
    definition: "Transducteur qui convertit les ondes sonores en signal électrique. Existe en dynamique, à condensateur, cardioïde, omnidirectionnel, etc.",
    url: "https://fr.wikipedia.org/wiki/Microphone"
  },
  "Haut-parleur / Enceinte": {
    definition: "Transducteur qui convertit un signal électrique en ondes sonores. Comprend un ou plusieurs drivers (grave, médium, aigu).",
    url: "https://fr.wikipedia.org/wiki/Haut-parleur"
  },
  "Processeur audio (DSP)": {
    definition: "Équipement dédié qui applique des traitements en temps réel : égalisation, filtrage, compression, délais, gestion de réseau (Dante).",
    url: "https://fr.wikipedia.org/wiki/Processeur_de_traitement_audio"
  },
  "Amplificateur": {
    definition: "Équipement qui augmente la puissance du signal audio afin d'alimenter des haut-parleurs. La puissance s'exprime en Watts.",
    url: "https://fr.wikipedia.org/wiki/Amplificateur_audio"
  }
};

// ============================================================
// MOTEUR DU POPOVER (identique à l'ancien, mais universel)
// ============================================================
function showGlossaryPopover(term, event) {
  const entry = GLOSSARY[term];
  if (!entry) return;
  const old = document.getElementById('glossaryPopover');
  if (old) old.remove();

  const popover = document.createElement('div');
  popover.id = 'glossaryPopover';
  popover.style.cssText = `
    position: fixed;
    max-width: 400px;
    max-height: 55vh;
    overflow-y: auto;
    background: #161b22;
    border: 1px solid #6e40c9;
    border-radius: 12px;
    padding: 18px 20px;
    z-index: 10000;
    box-shadow: 0 20px 60px rgba(0,0,0,0.9);
    backdrop-filter: blur(8px);
    animation: popoverFadeIn 0.2s ease;
    top: ${Math.min(event.clientY + 20, window.innerHeight - 200)}px;
    left: ${Math.min(event.clientX + 10, window.innerWidth - 420)}px;
  `;
  popover.innerHTML = `
    <div style="font-weight:700; color:#d2a8ff; margin-bottom:6px; font-size:0.95rem; border-bottom:1px solid #30363d; padding-bottom:6px;">${term}</div>
    <div style="color:#e6edf3; font-size:0.85rem; line-height:1.6; margin:10px 0;">${entry.definition}</div>
    <a href="${entry.url}" target="_blank" rel="noopener noreferrer" style="color:#58a6ff; font-size:0.8rem; text-decoration:none; border-top:1px solid #30363d; padding-top:8px; display:inline-block; width:100%;">
      🔗 Lire la source externe
    </a>
  `;
  document.body.appendChild(popover);

  const close = (e) => {
    if (!popover.contains(e.target) && e.target !== event.target) {
      popover.remove();
      document.removeEventListener('click', close);
    }
  };
  setTimeout(() => document.addEventListener('click', close), 50);
}

// Injection du style (une seule fois)
if (!document.getElementById('glossaryStyle')) {
  const style = document.createElement('style');
  style.id = 'glossaryStyle';
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
}
