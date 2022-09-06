import { findDisappearedNumbers } from './0017_find-all-numbers-dissapeared-in-array';

/**
 * # Find All Numbers Disappeared in an Array
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/
 *
 *
 * Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return _an array of all the integers in the range `[1, n]` that do not appear in `nums`_. <br />
 *
 */
describe('Find All Numbers Disappeared in an Array', () => {
  describe('findDisappearedNumbers', () => {
    /**
     * Input: nums = [4,3,2,7,8,2,3,1]
     * Output: [5,6]
     */
    it('Example 1', () => {
      expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([
        5, 6,
      ]);
    });

    /**
     * Input: nums = [1,1]
     * Output: [2]
     */
    it('Example 2', () => {
      expect(findDisappearedNumbers([1, 1])).toStrictEqual([2]);
    });
  });
});
