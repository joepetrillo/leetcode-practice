export function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let insertIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const leftSquared = nums[leftIndex] * nums[leftIndex];
    const rightSquared = nums[rightIndex] * nums[rightIndex];

    if (leftSquared > rightSquared) {
      result[insertIndex] = leftSquared;
      leftIndex++;
      insertIndex--;
    } else {
      result[insertIndex] = rightSquared;
      rightIndex--;
      insertIndex--;
    }
  }

  return result;
}

/* 

EXAMPLE: [-1, 3, 4]

leftIndex = 0;
rightIndex = 2;
inserIndex = 2;

0 <= 2 - true
leftSquared = 1;
rightSquared = 16;

rightIndex = 1;
insertIndex = 1;

0 <= 1 - true
leftSquared = 1;
rightSquared = 9;

rightIndex = 0;
insertIndex = 0;

0 <= 0 - true
leftSquared = 1;
rightSquared = 1;

rightIndex = -1;
insertIndex = -1;

0 <= -1 - FALSE
return

*/
