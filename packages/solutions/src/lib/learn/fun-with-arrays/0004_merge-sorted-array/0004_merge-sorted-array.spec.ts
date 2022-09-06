import { merge } from './0004_merge-sorted-array';

/**
 * # Merge Sorted Array
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
 *
 *
 * You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. <br />
 *
 * **Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**. <br />
 *
 * The final sorted array should not be returned by the function, but instead be stored _inside the array_ `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.
 *
 */
describe('Merge Sorted Array', () => {
  describe('merge', () => {
    /**
     * Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
     * Output: [1,2,2,3,5,6]
     * Explanation:
     *      The arrays we are merging are [1,2,3] and [2,5,6].
     *      The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
     */
    it('Example 1', () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const m = 3;
      const nums2 = [2, 5, 6];
      const n = 3;

      merge(nums1, m, nums2, n);
      expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
    });

    /**
     * Input:  nums1 = [1], m = 1, nums2 = [], n = 0
     * Output: [1]
     * Explanation:
     *      The arrays we are merging are [1] and [].
     *      The result of the merge is [1].
     */
    it('Example 2', () => {
      const nums1 = [1];
      const m = 1;
      const nums2 = [] as number[];
      const n = 0;

      merge(nums1, m, nums2, n);
      expect(nums1).toStrictEqual([1]);
    });

    /**
     * Input:  nums1 = [0], m = 0, nums2 = [1], n = 1
     * Output: [1]
     * Explanation:
     *      The arrays we are merging are [] and [1].
     *      The result of the merge is [1].
     *      Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
     */
    it('Example 3', () => {
      const nums1 = [0];
      const m = 0;
      const nums2 = [1];
      const n = 1;

      merge(nums1, m, nums2, n);
      expect(nums1).toStrictEqual([1]);
    });
  });
});
