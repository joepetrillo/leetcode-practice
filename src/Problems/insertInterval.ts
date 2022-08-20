export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (intervals.length < 1) return [newInterval];

  const result: number[][] = [];
  let index = 0;

  while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index]);
    index++;
  }

  while (
    index < intervals.length &&
    Math.max(intervals[index][0], newInterval[0]) <=
      Math.min(intervals[index][1], newInterval[1])
  ) {
    newInterval = [
      Math.min(intervals[index][0], newInterval[0]),
      Math.max(intervals[index][1], newInterval[1]),
    ];
    index++;
  }

  result.push(newInterval);
  result.push(...intervals.slice(index));

  return result;
}
