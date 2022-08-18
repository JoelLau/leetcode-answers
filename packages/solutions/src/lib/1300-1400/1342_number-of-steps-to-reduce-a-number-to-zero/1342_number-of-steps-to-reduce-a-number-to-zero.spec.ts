import { numberOfSteps } from './1342_number-of-steps-to-reduce-a-number-to-zero';

/**
 * # 1342. Number of Steps to Reduce a Number to Zero
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/
 *
 *
 * Given an integer `num`, return the number of steps to reduce it to zero. <br />
 *
 * In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.
 */
describe('1342. Number of Steps to Reduce a Number to Zero', () => {
  describe('numberOfSteps', () => {
    /**
     *  Input:  number = 14
     *  Output: 6
     *  Explanation:
     *      1. is even; divide by 2 and obtain 7.
     *      2. is odd; subtract 1 and obtain 6.
     *      3. is even; divide by 2 and obtain 3.
     *      4. is odd; subtract 1 and obtain 2.
     *      5. is even; divide by 2 and obtain 1.
     *      6. is odd; subtract 1 and obtain 0.
     */
    it('Example 1:', () => {
      expect(numberOfSteps(14)).toStrictEqual(6);
    });

    /**
     *  Input:  number = 8
     *  Output: 4
     *  Explanation:
     *      1. 8 is even; divide by 2 and obtain 4.
     *      2. 4 is even; divide by 2 and obtain 2.
     *      3. 2 is even; divide by 2 and obtain 1.
     *      4. 1 is odd; subtract 1 and obtain 0.
     */
    it('Example 2:', () => {
      expect(numberOfSteps(8)).toStrictEqual(4);
    });

    /**
     *  Input:  number = 123
     *  Output: 12
     */
    it('Example 3:', () => {
      expect(numberOfSteps(123)).toStrictEqual(12);
    });
  });
});
