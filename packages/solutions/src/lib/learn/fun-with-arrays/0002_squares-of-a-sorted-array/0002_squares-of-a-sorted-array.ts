/**
 *
 * @param nums an sorted integer array (non-decreasing order)
 * @returns an array of the squares of each number, in non-decreasing order
 */
export function sortedSquares(nums: number[]): number[] {
  return nums.map((n) => n * n).sort((a, b) => a - b);
}
