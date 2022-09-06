import { duplicateZeros } from './0003_duplicate-zeroes';

/**
 * # Duplicate Zeros
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 *
 *
 * Given a fixed-length integer array `arr`, duplicate each occurrence of zero, shifting the remaining elements to the right. <br />
 *
 * **Note** that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
 */
describe('Duplicate Zeros', () => {
  describe('duplicateZeros', () => {
    /**
     * Input:  arr = [1,0,2,3,0,4,5,0]
     * Output: [1,0,0,2,3,0,0,4]
     * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
     */
    it('Example 1', () => {
      const arr = [1, 0, 2, 3, 0, 4, 5, 0];
      duplicateZeros(arr);

      expect(arr).toStrictEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    });

    /**
     * Input:  arr = [1,2,3]
     * Output: [1,2,3]
     * Explanation: After calling your function, the input array is modified to: [1,2,3]
     */
    it('Example 2', () => {
      const arr = [1, 0, 2, 3, 0, 4, 5, 0];
      duplicateZeros(arr);

      expect(arr).toStrictEqual([1, 2, 3]);
    });
  });
});
