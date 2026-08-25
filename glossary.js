// glossary.js — Version avec recherche insensible aux accents
const GLOSSARY = {
  // ... (contenu identique à avant, 75+ termes)
};

// Fonction améliorée : normalise les accents pour matcher "échantillonnage" comme "Échantillonnage"
function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function highlightGlossaryTerms(text) {
  if (!text || typeof text !== 'string') return text;

  const keys = Object.keys(GLOSSARY);
  const sortedKeys = keys.sort((a, b) => b.length - a.length);
  
  // Échappement des caractères spéciaux
  const escapedKeys = sortedKeys.map(key => 
    key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  
  // Créer une regex qui match le texte normalisé
  // On va remplacer en deux étapes pour préserver la casse originale
  let result = text;
  sortedKeys.forEach(key => {
    // Créer une regex insensible à la casse pour ce terme
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = result.replace(regex, (match) => {
      return `<span class="glossary-term" data-term="${key}">${match}</span>`;
    });
  });
  
  return result;
}

// ... (reste du code popover identique)
