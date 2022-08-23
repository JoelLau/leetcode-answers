import { middleNode } from './0876_middle-of-the-linked-list';
import {
  listNodeToNumbers,
  numbersToListNodes,
} from '@joellau/shared/utilities';

/**
 * # 876. Middle of the Linked List
 *
 * https://leetcode.com/problems/middle-of-the-linked-list/
 *
 * Given the `head` of a singly linked list, return `the middle node of the linked list`. <br />
 *
 */
describe('876. Middle of the Linked List', () => {
  describe('middleNode', () => {
    /**
     * ![Example 1: Figure - 5 Nodes in a linked list, the 3rd (middle) one is highlighted in red](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)
     *
     * Input: head = [1,2,3,4,5]
     * Output: [3,4,5]
     * Explanation: The middle node of the list is node 3.
     */
    it('Example 1', () => {
      const input = [1, 2, 3, 4, 5];
      const inputLinkedList = numbersToListNodes(input);
      const outputLinkedList = middleNode(inputLinkedList);
      const actual = listNodeToNumbers(outputLinkedList);
      const output = [3, 4, 5];

      expect(outputLinkedList?.val).toStrictEqual(3);
      expect(actual).toStrictEqual(output);
    });

    /**
     * ![Example 2: Figure - 6 Nodes in a linked list, the 4th (middle) one is highlighted in red](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)
     *
     * Input: head = [1,2,3,4,5,6]
     * Output: [4,5,6]
     * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
     */
    it('Example 2', () => {
      const input = [1, 2, 3, 4, 5, 6];
      const inputLinkedList = numbersToListNodes(input);
      const outputLinkedList = middleNode(inputLinkedList);
      const actual = listNodeToNumbers(outputLinkedList);
      const output = [4, 5, 6];

      expect(outputLinkedList?.val).toStrictEqual(4);
      expect(actual).toStrictEqual(output);
    });
  });
});
