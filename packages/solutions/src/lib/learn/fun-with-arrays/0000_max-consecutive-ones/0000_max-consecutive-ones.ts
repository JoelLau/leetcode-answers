/**
 * Given a binary array `nums`, will return the _maximum number_ of consecutive `1`'s in the array. <br />
 *
 * @param nums a binary array
 * @returns maximum number of consecutive 1's in the array
 */
export function findMaxConsecutiveOnes(nums: number[]): number {
  let currentStreak = 0;
  let largestStreak = 0;

  nums.forEach((num) => {
    currentStreak = num ? currentStreak + 1 : 0;
    if (currentStreak > largestStreak) {
      largestStreak = currentStreak;
    }
  });

  return largestStreak;
}
