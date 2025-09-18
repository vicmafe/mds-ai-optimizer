//funções heurísticas.

export function normalizeText(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}

export function toSentenceCase(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
