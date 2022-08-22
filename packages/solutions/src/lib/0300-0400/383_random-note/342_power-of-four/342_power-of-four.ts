/**
 * @param n number to be tested
 * @returns
 *      `true` if `n` is a power of four
 */
export function isPowerOfFour(n: number): boolean {
  return Number.isInteger(Math.log(n) / Math.log(4));
}
