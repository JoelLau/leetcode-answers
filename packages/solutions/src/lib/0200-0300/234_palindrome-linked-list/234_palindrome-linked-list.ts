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

export function isPalindrome(head: ListNode | null): boolean {
  // build a separate linked list in reverse order
  let stack: ListNode | null = null;
  for (let curr = head; curr; curr = curr.next || null) {
    stack = new ListNode(curr.val, stack);
  }

  // iterate through both lists
  for (let currHead = head, currStack = stack; currHead || currStack; ) {
    const headVal = currHead?.val || null;
    const stackVal = currStack?.val || null;

    if (headVal !== stackVal) {
      return false;
    }

    currHead = currHead?.next || null;
    currStack = currStack?.next || null;
  }

  return true;
}
