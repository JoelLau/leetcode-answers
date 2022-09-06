import { validMountainArray } from './0008_valid-mountain-array';

/**
 * # Valid Mountain Array
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
 *
 * ## Problem
 *
 * Given an array of integers `arr`, return `true` _if and only if it is a valid mountain array._ <br />
 *
 * Recall that arr is a mountain array if and only if:
 *
 * - `arr.length >= 3`
 * - There exists some `i` with `0 < i < arr.length - 1` such that:
 *   - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
 *   - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`
 *
 * <br />
 *
 * ![Examples](https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png)
 */

describe('Valid Mountain Array', () => {
  describe('validMountainArray', () => {
    /**
     * Input:  arr = [2,1]
     * Output: false
     */
    it('Example 1', () => {
      expect(validMountainArray([2, 1])).toStrictEqual(false);
    });

    /**
     * Input: arr = [3,5,5]
     * Output: false
     */
    it('Example 2', () => {
      expect(validMountainArray([3, 5, 5])).toStrictEqual(false);
    });

    /**
     * Input: arr = [0,3,2,1]
     * Output: true
     */
    it('Example 3', () => {
      expect(validMountainArray([0, 3, 2, 1])).toStrictEqual(true);
    });
  });
});
