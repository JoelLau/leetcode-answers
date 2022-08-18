export function runningSum(nums: number[]): number[] {
  let runningSum = 0;
  return nums.map((item) => {
    runningSum += item;
    return runningSum;
  });
}
