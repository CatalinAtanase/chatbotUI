export function simulateRequestTime(): number {
  const min = 300;
  const max = 1500;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}