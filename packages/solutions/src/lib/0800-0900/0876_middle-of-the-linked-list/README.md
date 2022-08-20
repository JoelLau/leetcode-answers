|            |      |
| ---------- | ---- |
| Difficulty | Easy |

# 876. Middle of the Linked List

https://leetcode.com/problems/middle-of-the-linked-list/

## Problem

Given the `head` of a singly linked list, return `the middle node of the linked list`. <br />

If there are two middle nodes, return **the second middle** node.

### Example 1:

![Example 1: Figure - 5 Nodes in a linked list, the 3rd (middle) one is highlighted in red](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

- **Input**: head = [1,2,3,4,5]
- **Output**: [3,4,5]
- **Explanation**: The middle node of the list is node 3.

### Example 2:

![Example 2: Figure - 6 Nodes in a linked list, the 4th (middle) one is highlighted in red](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

- **Input**: head = [1,2,3,4,5,6]
- **Output**: [4,5,6]
- **Explanation**: Since the list has two middle nodes with values 3 and 4, we return the second one.

### Contraints:

- The number of nodes in the list is in the range `[1, 100]`.
- `1 <= Node.val <= 100`
