import { isPowerOfFour } from './342_power-of-four';

/*
 * # 342. Power of Four
 *
 * https://leetcode.com/problems/power-of-four/
 *
 *
 * Given an integer `n`, return _`true` if it is a power of four_. _Otherwise, return `false`_. <br />
 *
 * An integer `n` is a power of four, if there exists an integer `x` such that <code>n == 4<sup>x</sup></code>.
 */
describe('342. Power of Four', () => {
  describe('isPowerOfFour', () => {
    /**
     *
     * Input:  n = 16
     * Output: true
     */
    it('Example 1', () => {
      expect(isPowerOfFour(16)).toStrictEqual(true);
    });

    /**
     *
     * Input:  n = 5
     * Output: true
     */
    it('Example 2', () => {
      expect(isPowerOfFour(5)).toStrictEqual(false);
    });

    /**
     *
     * Input:  n = 1
     * Output: true
     */
    it('Example 3', () => {
      expect(isPowerOfFour(1)).toStrictEqual(true);
    });
  });
});
