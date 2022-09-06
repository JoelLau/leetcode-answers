import { checkIfExist } from './0007_check-if-n-and-its-double-exist';

/**
 * # Check If N and Its Double Exist
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 *
 *
 * Given an array `arr` of integers, check if there exists two integers `N` and `M` such that `N` is the double of `M` ( i.e. `N = 2 \* M`). <br />
 *
 * More formally check if there exists two indices `i` and `j` such that :
 *
 * - `i != j`
 * - `0 <= i, j < arr.length`
 * - `arr[i] == 2 \* arr[j]`
 */

describe('Check If N and Its Double Exist', () => {
  describe('checkIfExist', () => {
    /**
     * Input: arr = [10,2,5,3]
     * Output: true
     * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
     */
    it('Example 1', () => {
      expect(checkIfExist([10, 2, 5, 3])).toStrictEqual(true);
    });

    /**
     * Input: arr = [7,1,14,11]
     * Output: true
     * Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
     */
    it('Example 2', () => {
      expect(checkIfExist([7, 1, 14, 11])).toStrictEqual(true);
    });

    /**
     * Input: arr = [3,1,7,11]
     * Output: false
     * Explanation: In this case does not exist N and M, such that N = 2 * M.
     */
    it('Example 3', () => {
      expect(checkIfExist([3, 1, 7, 11])).toStrictEqual(false);
    });
  });
});
