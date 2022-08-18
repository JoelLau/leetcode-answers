export function fizzBuzz(n: number): string[] {
  return Array.from(Array(n), (_, x) => x + 1).map((item) => {
    let newItem = '';

    if (item % 3 === 0) {
      newItem += 'Fizz';
    }

    if (item % 5 === 0) {
      newItem += 'Buzz';
    }

    return newItem || `${item}`;
  });
}
