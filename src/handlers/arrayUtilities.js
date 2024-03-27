function generateRandomUniqueArray(n) {
  const set = new Set();
  while (set.size < n) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    set.add(randomNumber);
  }
  return Array.from(set);
}

function generateRandomArray(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
}

export { generateRandomUniqueArray, generateRandomArray };
