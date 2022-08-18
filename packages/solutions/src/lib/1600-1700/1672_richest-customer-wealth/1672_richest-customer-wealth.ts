export function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((biggestWealth, account) => {
    const wealth = account.reduce((x, y) => x + y, 0);
    return Math.max(biggestWealth, wealth);
  }, -Infinity);
}
