import { findMaxConsecutiveOnes } from './0000_max-consecutive-ones';

/**
 * Max Consecutive Ones
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
 *
 *
 * Given a binary array `nums`, return the _maximum number_ of consecutive `1`'s in the array. <br />
 *
 */
describe('Max Consecutive Ones', () => {
  describe('findMaxConsecutiveOnes', () => {
    /**
     * Input:       nums = [1,1,0,1,1,1]
     * Output:      3
     * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
     */
    it('Example 1', () => {
      expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toStrictEqual(3);
    });

    /**
     * Example 2:
     *
     * Input:  nums = [1,0,1,1,0,1]
     * Output: 2
     */
    it('Example 2', () => {
      expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toStrictEqual(2);
    });
  });
});
