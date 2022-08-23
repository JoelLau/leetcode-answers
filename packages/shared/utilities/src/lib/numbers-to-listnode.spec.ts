import { ListNode } from './list-node.class';
import { numbersToListNodes } from './numbers-to-listnode';

describe('numbersToListNodes', () => {
  describe('given an empty array', () => {
    const input: number[] = [];
    const result = numbersToListNodes(input);

    it('return must not be null', () => {
      expect(result).toBeNull();
    });
  });

  describe('given an array with a single input', () => {
    const input = [9999];
    const result = numbersToListNodes(input);

    it('return must not be null', () => {
      expect(result).not.toBeNull();
    });

    it('return a node with the same value', () => {
      expect(result?.val).toStrictEqual(input[0]);
    });

    it('returns a linked list with a single item', () => {
      expect(result).not.toBeNull();
      expect(result?.next).toBeNull();
    });
  });

  describe('given an array of multiple numbers', () => {
    const input = [9232, 223, -232, 1223, 0];
    const result = numbersToListNodes(input);

    it('return must not be null', () => {
      expect(result).not.toBeNull();
    });

    it('return a new linked list', () => {
      expect(result).toStrictEqual(
        new ListNode(
          9232,
          new ListNode(
            223,
            new ListNode(-232, new ListNode(1223, new ListNode(0)))
          )
        )
      );
    });
  });
});
