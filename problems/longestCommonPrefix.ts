function getCommonPrefix(str1: string, str2: string): string {
  if (str1 === str2) {
    return str1;
  }

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] !== str2[i]) {
      return str1.slice(0, i);
    }
  }

  return "";
}

export function longestCommonPrefix(strs: string[]): string {
  let commonPrefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    console.log(commonPrefix);
    commonPrefix = getCommonPrefix(commonPrefix, strs[i]);
  }

  return commonPrefix; // return empty string if there is no common prefix
}
