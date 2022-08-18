import { runningSum } from './1480_running-sum-of-1d-array';

describe('runningSum', () => {
  it('Example 1', () => {
    expect(runningSum([1, 2, 3, 4])).toBe([1, 3, 6, 10]);
  });

  it('Example 2', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toBe([1, 2, 3, 4, 5]);
  });

  it('Example 3', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toBe([3, 4, 6, 16, 17]);
  });
});
