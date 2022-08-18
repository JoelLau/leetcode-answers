# 1342. Number of Steps to Reduce a Number to Zero

https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

## Problem

Given an integer `num`, return the number of steps to reduce it to zero. <br />

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.

### Example 1:

- **Input**: number = 14
- **Output**: 6
- **Explanation** (Steps):
  1. 14 is even; divide by 2 and obtain 7.
  1. 7 is odd; subtract 1 and obtain 6.
  1. 6 is even; divide by 2 and obtain 3.
  1. 3 is odd; subtract 1 and obtain 2.
  1. 2 is even; divide by 2 and obtain 1.
  1. 1 is odd; subtract 1 and obtain 0.

### Example 2:

- **Input**: number = 8
- **Output**: 4
- **Explanation** (Steps):
  1. 8 is even; divide by 2 and obtain 4.
  1. 4 is even; divide by 2 and obtain 2.
  1. 2 is even; divide by 2 and obtain 1.
  1. 1 is odd; subtract 1 and obtain 0.

### Example 3:

- **Input**: number = 123
- **Output**: 12

### Contraints:

- `0 <= num <= 106`
