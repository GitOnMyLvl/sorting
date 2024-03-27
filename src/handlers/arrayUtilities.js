function generateRandomArray(n) {
  const set = new Set();
  while (set.size < n) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    set.add(randomNumber);
  }
  return Array.from(set);
}

export default generateRandomArray;
export const arrayTo10 = Array.from({ length: 10 }, (_, i) => i + 1);
export const arrayTo100 = Array.from({ length: 100 }, (_, i) => i + 1);
