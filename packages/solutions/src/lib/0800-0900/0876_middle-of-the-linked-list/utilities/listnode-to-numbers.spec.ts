import { ListNode } from './list-node.class';
import { listNodeToNumbers } from './listnode-to-numbers';

describe('listNodeToNumbers', () => {
  describe('given null', () => {
    const input: ListNode | null = null;
    const result = listNodeToNumbers(input);

    it('return an empty array', () => {
      expect(result).toStrictEqual([]);
    });
  });

  describe('given list with a single item', () => {
    const input: ListNode | null = new ListNode(-999.232);
    const result = listNodeToNumbers(input);

    it('return a array with one number of the same value', () => {
      expect(result).toStrictEqual([-999.232]);
    });
  });

  describe('given list with 3 items', () => {
    const input: ListNode | null = new ListNode(
      999,
      new ListNode(888, new ListNode(777))
    );
    const result = listNodeToNumbers(input);

    it('return a array with one number of the same value', () => {
      expect(result).toStrictEqual([999, 888, 777]);
    });
  });
});
