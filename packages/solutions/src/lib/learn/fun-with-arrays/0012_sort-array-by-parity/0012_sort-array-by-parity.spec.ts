import { sortArrayByParity } from './0012_sort-array-by-parity';

/**
 * # Sort Array By Parity
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
 *
 * ## Problem
 *
 * Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers. <br />
 *
 * Return _**any array** that satisfies this condition_.
 *
 */

describe('Sort Array By Parity', () => {
  fdescribe('sortArrayByParity', () => {
    /**
     * Input:  nums = [3,1,2,4]
     * Output: [2,4,3,1]
     * Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
     */
    it('Example 1', () => {
      const actual = sortArrayByParity([3, 1, 2, 4]);
      const actualStr = JSON.stringify(actual);

      console.log(actualStr);
      expect(
        actualStr == `[4,2,3,1]` ||
          actualStr == `[2,4,1,3]` ||
          actualStr == `[(4,2,1,3)]`
      ).toBeTruthy();
    });

    /**
     * Input: nums = [0]
     * Output: [0]
     */
    it('Example 2', () => {
      const nums = [0];
      expect(sortArrayByParity(nums)).toStrictEqual([0]);
    });
  });
});
