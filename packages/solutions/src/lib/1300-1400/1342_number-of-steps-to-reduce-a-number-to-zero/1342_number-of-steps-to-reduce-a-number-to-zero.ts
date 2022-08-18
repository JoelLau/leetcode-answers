export function numberOfSteps(num: number): number {
  let curr = num;
  let steps = 0;

  while (curr > 0) {
    if (curr % 2 === 0) {
      curr /= 2;
    } else {
      curr -= 1;
    }

    steps += 1;
  }

  return steps;
}
