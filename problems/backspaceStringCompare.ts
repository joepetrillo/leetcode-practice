function computeString(strArr: string[], str: string): void {
  for (const char of str) {
    if (char === "#") {
      strArr.pop();
    } else {
      strArr.push(char);
    }
  }
}

export function backspaceCompare(s: string, t: string): boolean {
  const sArr: string[] = [];
  const tArr: string[] = [];

  computeString(sArr, s);
  computeString(tArr, t);

  return sArr.join("") === tArr.join("");
}
