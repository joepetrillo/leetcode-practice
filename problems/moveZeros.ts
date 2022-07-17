/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let zeroIndexes: number[] = [];

  nums.forEach((num, index) => {
    if (num === 0) {
      zeroIndexes.unshift(index);
    } else if (zeroIndexes.length !== 0) {
      nums[zeroIndexes.pop()!] = num;
      nums[index] = 0;
      zeroIndexes.unshift(index);
    }
  });
}
