import { thirdMax } from './0016_third-maximum-number';

/**
 * # Third Maximum Number
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
 *
 *
 * Given an integer array `nums`, return _the **third distinct maximum** number in this array. If the third maximum does not exist, return the **maximum** number_.
 */
describe('Third Maximum Number', () => {
  describe('thirdMax', () => {
    /**
     * Input: nums = [3,2,1]
     * Output: 1
     * Explanation:
     *      The first distinct maximum is 3.
     *      The second distinct maximum is 2.
     *      The third distinct maximum is 1.
     */
    it('Example 1', () => {
      expect(thirdMax([3, 2, 1])).toStrictEqual(1);
    });

    /**
     * Input: nums = [1,2]
     * Output: 2
     * Explanation:
     *      The first distinct maximum is 2.
     *      The second distinct maximum is 1.
     *      The third distinct maximum does not exist, so the maximum (2) is returned instead.
     */
    it('Example 2', () => {
      expect(thirdMax([1, 2])).toStrictEqual(2);
    });

    /**
     * Input: nums = [2,2,3,1]
     * Output: 1
     * Explanation:
     *      The first distinct maximum is 3.
     *      The second distinct maximum is 2 (both 2's are counted together since they have the same value).
     *      The third distinct maximum is 1.
     */
    it('Example 3', () => {
      expect(thirdMax([2, 2, 3, 1])).toStrictEqual(1);
    });
  });
});
