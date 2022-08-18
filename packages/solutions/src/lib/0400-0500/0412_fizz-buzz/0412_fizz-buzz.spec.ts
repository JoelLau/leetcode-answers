import { fizzBuzz } from './0412_fizz-buzz';

describe('fizzBuzz', () => {
  it('Example 1', () => {
    expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
  });

  it('Example 2', () => {
    expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  it('Example 3', () => {
    expect(fizzBuzz(15)).toStrictEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
