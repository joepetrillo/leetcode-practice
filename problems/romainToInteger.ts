export function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total: number = 0;
  let lastValue: number = 0;

  for (const symbol of s) {
    const currValue = values[symbol];

    if (lastValue < currValue) {
      total -= lastValue;
      total += currValue - lastValue;
    } else {
      total += values[symbol];
    }

    lastValue = values[symbol];
  }

  return total;
}
