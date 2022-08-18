import { runningSum } from './1480_running-sum-of-1d-array';

/**
 * # 1480. Running Sum of 1d Array
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/
 *
 *
 * Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`. <br />
 *
 * Return the running sum of `nums`.
 */
describe('1480. Running Sum of 1d Array', () => {
  describe('runningSum', () => {
    /**
     * Input:  nums = [1,2,3,4]
     * Output: [1,3,6,10]
     *  Explanation:
     *    Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
     */
    it('Example 1', () => {
      expect(runningSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
    });

    /**
     * Input:  nums = [1,2,3,4]
     * Output: [1,3,6,10]
     *  Explanation:
     *    Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
     */
    it('Example 2', () => {
      expect(runningSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    });

    /**
     * Input:  nums = [1,1,1,1,1]
     * Output: [1,2,3,4,5]
     * Explanation:
     *    Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
     */
    it('Example 3', () => {
      expect(runningSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
    });
  });
});
