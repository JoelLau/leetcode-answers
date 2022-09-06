import { replaceElements } from './0009_replace-elements-with-greatest-element-on-right-side';
/**
 * # Replace Elements with Greatest Element on Right Side
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
 *
 *
 * Given an array `arr`, replace every element in that array with the greatest element among the elements to its right, and replace the last element with `-1`. <br />
 *
 * After doing so, return the array.
 *
 */

describe('Replace Elements with Greatest Element on Right Side', () => {
  describe('replaceElements', () => {
    /**
     * Input:  arr = [17,18,5,4,6,1]
     * Output: [18,6,6,6,1,-1]
     * Explanation:
     *      index 0 --> the greatest element to the right of index 0 is index 1 (18).
     *      index 1 --> the greatest element to the right of index 1 is index 4 (6).
     *      index 2 --> the greatest element to the right of index 2 is index 4 (6).
     *      index 3 --> the greatest element to the right of index 3 is index 4 (6).
     *      index 4 --> the greatest element to the right of index 4 is index 5 (1).
     *      index 5 --> there are no elements to the right of index 5, so we put -1.
     */
    it('Example 1', () => {
      expect(replaceElements([17, 18, 5, 4, 6, 1])).toStrictEqual([
        18, 6, 6, 6, 1, -1,
      ]);
    });

    /**
     * Input:  arr = [400]
     * Output: [-1]
     * Explanation: There are no elements to the right of index 0.
     */
    it('Example 2', () => {
      expect(replaceElements([400])).toStrictEqual([-1]);
    });
  });
});
