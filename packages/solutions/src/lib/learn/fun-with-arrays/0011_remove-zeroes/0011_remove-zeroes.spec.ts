import { moveZeroes } from './0011_remove-zeroes';

/**
 * # Move Zeroes
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
 *
 * ## Problem
 *
 * Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. <br />
 *
 * **Note** that you must do this in-place without making a copy of the array.
 */
describe('Move Zeroes', () => {
  describe('moveZeroes', () => {
    /**
     * Input:  nums = [0,1,0,3,12]
     * Output: [1,3,12,0,0]
     */
    it('Example 1', () => {
      const nums = [0, 1, 0, 3, 12];
      moveZeroes(nums);

      expect(nums).toStrictEqual([1, 3, 12, 0, 0]);
    });

    /**
     * Input:  nums = [0]
     * Output: [0]
     */
    it('Example 2', () => {
      const nums = [0];
      moveZeroes(nums);

      expect(nums).toStrictEqual([0]);
    });
  });
});
