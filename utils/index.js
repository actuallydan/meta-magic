export function capitalize(text) {
  return text[0].toUpperCase() + text.substring(1, text.length);
}

export function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
