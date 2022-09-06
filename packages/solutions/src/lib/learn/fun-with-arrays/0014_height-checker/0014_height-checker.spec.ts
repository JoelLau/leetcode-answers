import { heightChecker } from './0014_height-checker';

/**
 * # Height Checker
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
 *
 * ## Problem
 *
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in **non-decreasing order** by height. Let this ordering be represented by the integer array `expected` where `expected[i]` is the expected height of the <code>i<sup>th</sup></code> student in line. <br />
 *
 * You are given an integer array `heights` representing the current order that the students are standing in. Each `heights[i]` is the height of the <code>i<sup>th</sup></code> student in line (**0-indexed**). <br />
 *
 * Return _**the number of indices** where `heights[i] != expected[i]`_.
 */

describe('Height Checker', () => {
  describe('heightChecker', () => {
    /**
     * Input:  heights = [1,1,4,2,1,3]
     * Output: 3
     * Explanation:
     *      heights:  [1,1,4,2,1,3]
     *      expected: [1,1,1,2,3,4]
     *      Indices 2, 4, and 5 do not match.
     */
    it('Example 1', () => {
      expect(heightChecker([1, 2, 3])).toStrictEqual(3);
    });

    /**
     * Input:  heights = [5,1,2,3,4]
     * Output: 5
     * Explanation:
     *      heights:  [5,1,2,3,4]
     *      expected: [1,2,3,4,5]
     *      All indices do not match.
     */

    it('Example 2', () => {
      expect(heightChecker([5, 1, 2, 3, 4])).toStrictEqual(5);
    });

    /**
     * Input:  heights = [1,2,3,4,5]
     * Output: 0
     * Explanation:
     *      heights:  [1,2,3,4,5]
     *      expected: [1,2,3,4,5]
     *      All indices match.
     */
    it('Example 3', () => {
      expect(heightChecker([1, 2, 3, 4, 5])).toStrictEqual(0);
    });
  });
});
