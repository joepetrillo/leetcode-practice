export function isPalindrome(x: number): boolean {
  const str = x.toString(10);
  return str === str.split("").reverse().join("");
}
