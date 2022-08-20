export function containsDuplicate(nums: number[]): boolean {
  const counts: Record<number, number> = {};

  for (const num of nums) {
    counts[num] = counts[num] ? ++counts[num] : 1;
    if (counts[num] > 1) {
      return true;
    }
  }

  return false;
}

export function containsDuplicateAlternative(nums: number[]): boolean {
  return new Set<number>(nums).size !== nums.length;
}
