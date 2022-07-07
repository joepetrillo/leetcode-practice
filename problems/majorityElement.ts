function majorityElement(nums: number[]): number | null {
  const majorityAmount = Math.floor(nums.length / 2); // need to find element that appears MORE than this

  const counts: Record<string, number> = {};

  for (const num of nums) {
    counts[num] = counts[num] >= 1 ? ++counts[num] : 1;
    if (counts[num] > majorityAmount) {
      return num;
    }
  }

  return null;
}
