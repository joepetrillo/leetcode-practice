export function longestPalindrome(s: string): number {
  const letterCounts: Record<string, number> = {};
  let length: number = 0;

  if (s.length === 0) {
    return length;
  }

  for (const letter of s) {
    letterCounts[letter] =
      letterCounts[letter] >= 1 ? ++letterCounts[letter] : 1;
  }

  for (const count of Object.values(letterCounts)) {
    length += Math.floor(count / 2) * 2;
  }

  return length < s.length ? ++length : length;
}
