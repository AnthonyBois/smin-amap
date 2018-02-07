export function formatPrice(cents) {
  return `${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}€`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'agressif', 'beau', 'brave', 'confiant', 'chaleureux', 'dangereux', 'egoiste', 'fourbe', 'gentil', 'heureux', 'impartial', 'jovial', 'malicieux', 'placide', 'splendide', 'timide', 'triste', 'vilain'];
  const nouns = ['berdjugin', 'jacquot', 'gwen', 'lestideau', 'mercier', 'fouad', 'canard', 'verdillon', 'collomb', 'gaillard', 'zaza', 'andreacola', 'gremillard'];
  return `${rando(nouns)}-est-${rando(adjectives)}`;
}