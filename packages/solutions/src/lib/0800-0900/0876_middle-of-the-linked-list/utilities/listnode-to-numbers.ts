import { ListNode } from './list-node.class';

export function listNodeToNumbers(head: ListNode | null): number[] {
  const numbers: number[] = [];

  for (let curr = head; curr !== null; curr = curr?.next) {
    numbers.push(curr.val);
  }

  return numbers;
}
