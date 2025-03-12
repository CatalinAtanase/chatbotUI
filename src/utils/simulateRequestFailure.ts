export function simulateRequestFailure(): boolean {
  const randomValue = Math.random();
  return randomValue < 0.1;
}