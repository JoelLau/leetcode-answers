import { ListNode } from '@joellau/shared/utilities';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Solution adapted from:
 *
 * https://leetcode.com/problems/middle-of-the-linked-list/discuss/1798532/Typescript-O(n)-Time-O(1)-Spacehttps://leetcode.com/problems/middle-of-the-linked-list/discuss/1798532/Typescript-O(n)-Time-O(1)-Space
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let turtle = head;
  let hare = head?.next; // moves TWICE as fast as the tortoise

  while (hare) {
    turtle = turtle?.next || null;
    hare = hare?.next?.next || null;
  }

  return turtle || null;
}

export function originalImplementation(head: ListNode | null): ListNode | null {
  const nodes: ListNode[] = [];
  for (let curr = head; curr !== null; curr = curr?.next) {
    nodes.push(curr);
  }

  const middleIndex = Math.floor(nodes.length / 2);
  return nodes[middleIndex];
}
