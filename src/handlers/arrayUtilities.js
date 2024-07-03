function generateRandomUniqueArray(n) {
  if (n < 1 || n > 100) {
    throw new Error('n must be in range 1 to 100');
  }
  const set = new Set();
  while (set.size < n) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    set.add(randomNumber);
  }
  return Array.from(set);
}

function generateRandomArray(n) {
  if (n < 1 || n > 100) {
    throw new Error('n must be in range 1 to 100');
  }
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
}

export { generateRandomUniqueArray, generateRandomArray };
