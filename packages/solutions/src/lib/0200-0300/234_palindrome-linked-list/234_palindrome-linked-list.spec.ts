import { numbersToListNodes } from '@joellau/shared/utilities';
import { isPalindrome } from './234_palindrome-linked-list';

/*
 * # 234. Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 *
 * Given the `head` of a singly linked list, return `true` if it is a palindrome.
 *
 */

describe('234. Palindrome Linked List', () => {
  describe('isPalindrome', () => {
    /**
     * Input:  head = [1,2,2,1]
     * Output: true
     */
    it('Example 1: expect([1,2,2,1]).toBe(true)', () => {
      const input = [1, 2, 2, 1];
      const inputLinkedList = numbersToListNodes(input);
      const actual = isPalindrome(inputLinkedList);

      expect(actual).toStrictEqual(true);
    });

    /**
     * Input: head = [1,2]
     * Output: false
     */
    it('Example 2: expect([1,2]).toBe(false)', () => {
      const input = [1, 2];
      const inputLinkedList = numbersToListNodes(input);
      const actual = isPalindrome(inputLinkedList);

      expect(actual).toStrictEqual(false);
    });
  });
});
