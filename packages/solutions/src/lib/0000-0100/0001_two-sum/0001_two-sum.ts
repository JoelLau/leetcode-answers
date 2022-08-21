/**
 *
 * @param nums an array of integers
 * @param target an integer
 * @returns
 *      the indices of the two numbers such that they add up to target
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const pair = target - curr;
    const pairExists = map.has(pair);

    if (pairExists) {
      return [i, [...(map.get(pair) || [])][0]].sort();
    }

    map.set(curr, [...(map.get(pair) || []), i]);
  }
  return [];
}
