import { findNumbers } from './0001_find-numbers-with-even-number-of-digits';

/**
 * # Find Numbers with Even Number of Digits
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
 *
 *
 * Given an array `nums` of integers, return how many of them contain an _even number of digits_.
 *
 */
describe('Find Numbers with Even Number of Digits', () => {
  describe('findNumbers', () => {
    /*
     * Input: nums = [12,345,2,6,7896]
     * Output: 2
     * Explanation:
     *      12 contains 2 digits (even number of digits).
     *      345 contains 3 digits (odd number of digits).
     *      2 contains 1 digit (odd number of digits).
     *      6 contains 1 digit (odd number of digits).
     *      7896 contains 4 digits (even number of digits).
     *      Therefore only 12 and 7896 contain an even number of digits.
     */
    it('Example 1', () => {
      expect(findNumbers([12, 345, 2, 6, 7896])).toStrictEqual(2);
    });

    /**
     * Input:  nums = [555,901,482,1771]
     * Output: 1
     * Explanation:
     *      Only 1771 contains an even number of digits.
     */

    it('Example 2', () => {
      expect(findNumbers([555, 901, 482, 1771])).toStrictEqual(1);
    });
  });
});
