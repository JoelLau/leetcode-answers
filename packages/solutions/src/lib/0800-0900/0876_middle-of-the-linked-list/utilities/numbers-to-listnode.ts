import { ListNode } from './list-node.class';

export function numbersToListNodes(numbers: number[]): ListNode | null {
  const mapped = numbers.reduce((prev, curr, index) => {
    const newNode = new ListNode(curr);

    if (index > 0) {
      const prevNode = prev[index - 1];
      prevNode.next = newNode;
    }

    prev.push(newNode);
    return prev;
  }, [] as ListNode[]);

  if (mapped.length === 0) {
    return null;
  }

  return mapped[0];
}
