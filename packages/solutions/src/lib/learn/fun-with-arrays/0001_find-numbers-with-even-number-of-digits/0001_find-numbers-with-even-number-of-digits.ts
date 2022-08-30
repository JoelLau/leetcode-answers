export function findNumbers(nums: number[]): number {
  return nums.reduce((prev, curr) => {
    const length = digits(curr);
    return !(length % 2) ? prev + 1 : prev;
  }, 0);
}

/**
 *
 * @param num
 * @returns number of digits in num
 */
export function digits(num: number): number {
  let length = 0;
  for (let x = num; x >= 1; x = Math.floor(x / 10)) {
    length++;
  }
  return length;
}
