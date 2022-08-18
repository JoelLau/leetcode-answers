import { maximumWealth } from './1672_richest-customer-wealth';

/**
 * # 1672. Richest Customer Wealth
 *
 * https://leetcode.com/problems/richest-customer-wealth/
 *
 *
 * You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the <code>i<sup>th</sup></code>​​​ customer has in the <code>j<sup>th</sup></code>​​​​ bank. Return _the **wealth** that the richest customer_ has. <br />
 *
 * A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.
 */
describe('1672. Richest Customer Wealth', () => {
  describe('maximumWealth', () => {
    /**
     * Input: accounts = [[1,2,3],[3,2,1]]
     * Output: 6
     * Explanation:
     *    1st customer has wealth = 1 + 2 + 3 = 6
     *    2nd customer has wealth = 3 + 2 + 1 = 6
     *    Both customers are considered the richest with a wealth of 6 each, so return 6.
     */
    it('Example 1', () => {
      expect(
        maximumWealth([
          [1, 2, 3],
          [3, 2, 1],
        ])
      ).toStrictEqual(6);
    });

    /**
     * Input: accounts = [[1,5],[7,3],[3,5]]
     * Output: 10
     * Explanation:
     *    1st customer has wealth = 6
     *    2nd customer has wealth = 10
     *    3rd customer has wealth = 8
     *    The 2nd customer is the richest with a wealth of 10.
     */
    it('Example 2', () => {
      expect(
        maximumWealth([
          [1, 5],
          [7, 3],
          [3, 5],
        ])
      ).toStrictEqual(10);
    });

    /**
     * Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
     * Output: 17
     */
    it('Example 3', () => {
      expect(
        maximumWealth([
          [2, 8, 7],
          [7, 1, 3],
          [1, 9, 5],
        ])
      ).toStrictEqual(17);
    });
  });
});
