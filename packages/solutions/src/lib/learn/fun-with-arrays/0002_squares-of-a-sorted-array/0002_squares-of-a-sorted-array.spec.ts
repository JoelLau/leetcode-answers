import { sortedSquares } from './0002_squares-of-a-sorted-array';

/**
 * # Squares of a Sorted Array
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
 *
 *
 * Given an integer array `nums` sorted in **non-decreasing** order, return *an array of **the squares of each number sorted** in non-decreasing order*. <br />
 *
 */
describe('Squares of a Sorted Array', () => {
  describe('sortedSquares', () => {
    /*
     * Input:   nums = [-4,-1,0,3,10]
     * Output:  [0,1,9,16,100]
     * Explanation:
     *          After squaring, the array becomes [16,1,0,9,100].
     *          After sorting, it becomes [0,1,9,16,100].
     */
    it('Example 1', () => {
      expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([
        0, 1, 9, 16, 100,
      ]);
    });

    /*
     * Input:   nums = [-7,-3,2,3,11]
     * Output:  [4,9,9,49,121]
     */
    it('Example 2', () => {
      expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([
        4, 9, 9, 49, 121,
      ]);
    });
  });
});
