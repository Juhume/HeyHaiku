/**
 * Syllable counter for English words.
 * Same algorithm as the original HeyHaiku, slightly improved.
 */
export function countSyllables(word: string): number {
  word = word.toLowerCase().trim();
  if (!word) return 0;
  if (word.length <= 3) return 1;

  const cleaned = word
    .replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, "")
    .replace(/^y/, "");

  const matches = cleaned.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export function countLineSyllables(line: string): number {
  return line
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0)
    .reduce((count, word) => count + countSyllables(word), 0);
}

export function validateHaiku(
  line1: string,
  line2: string,
  line3: string
): { valid: boolean; syllables: [number, number, number] } {
  const s1 = countLineSyllables(line1);
  const s2 = countLineSyllables(line2);
  const s3 = countLineSyllables(line3);

  return {
    valid: s1 === 5 && s2 === 7 && s3 === 5,
    syllables: [s1, s2, s3],
  };
}
