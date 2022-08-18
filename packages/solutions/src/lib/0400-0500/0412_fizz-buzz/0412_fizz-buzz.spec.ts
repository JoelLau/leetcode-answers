import { fizzBuzz } from './0412_fizz-buzz';

/**
 * # 412. Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/
 *
 *
 * Given an integer `n`, return a string `array` answer **(1-indexed)** where:
 *
 * - `answer[i] == "FizzBuzz"` if i is divisible by `3` and `5`.
 * - `answer[i] == "Fizz"` if `i` is divisible by `3`.
 * - `answer[i] == "Buzz"` if `i` is divisible by 5.
 * - `answer[i] == i` (as a string) if none of the above conditions are true.
 *
 */
describe('412. Fizz Buzz', () => {
  describe('fizzBuzz', () => {
    /**
     * Input: n = 3
     * Output: ["1","2","Fizz"]
     */
    it('Example 1', () => {
      expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
    });

    /**
     * Input: n = 5
     * Output: ["1","2","Fizz","4","Buzz"]
     */
    it('Example 2', () => {
      expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });

    /**
     * Input: n = 15
     * Output: [
     *       "1",    "2", "Fizz",    "4",    "Buzz",
     *    "Fizz",    "7",    "8", "Fizz",    "Buzz",
     *      "11", "Fizz",   "13",   "14","FizzBuzz"
     * ]
     */
    it('Example 3', () => {
      expect(fizzBuzz(15)).toStrictEqual([
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
      ]);
    });
  });
});
