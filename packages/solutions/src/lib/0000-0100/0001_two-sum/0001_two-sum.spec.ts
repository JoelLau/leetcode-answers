import { twoSum } from './0001_two-sum';

/**
 * # 1. Two Sum
 *
 * https://leetcode.com/problems/two-sum/
 *
 *
 * Given an array of integers _nums_ and an integer _target_, return _indices_ of the two numbers such that they add up to _target_. <br />
 *
 * You may assume that each input would have **exactly one solution**, and you may not use the _same_ element twice. <br />
 *
 * You can return the answer in any order. <br />
 */
describe('1. Two Sum', () => {
  describe('twoSum', () => {
    /**
     * Input:  nums = [2,7,11,15], target = 9
     * Output: [0,1]
     * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
     */
    it('Example 1', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });

    /**
     * Input:  nums = [3,2,4], target = 6
     * Output: [1,2]
     */
    it('Example 2', () => {
      expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    });

    /**
     * Input:  nums = [3,3],  target = 6
     * Output: [0, 1]
     */
    it('Example 3', () => {
      expect(twoSum([3, 3], 6));
    });
  });
});
