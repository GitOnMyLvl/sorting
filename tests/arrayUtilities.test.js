import { generateRandomArray, generateRandomUniqueArray } from "../src/handlers/arrayUtilities";

describe("Array Utilities", () => {

  test('generateRandomArray should generate a random array with length of n', () => {
    const n = 10;
    const randomArray = generateRandomArray(n);
    expect(randomArray.length).toBe(n);
  });

  test('generateRandomArray should generate a random array with elements between 1 and 100', () => {
    const n = 10;
    const randomArray = generateRandomArray(n);
    const isValid = randomArray.every((element) => element >= 1 && element <= 100);
    expect(isValid).toBe(true);
  });

  test('generateRandomArray should throw an error if n is greater than 100', () => {
    const n = 101;
    expect(() => generateRandomArray(n)).toThrow();
  });

  test('generateRandomArray should throw an error if n is less than 1', () => {
    const n = 0;
    expect(() => generateRandomArray(n)).toThrow();
  });

  test('generateRandomUniqueArray should generate a random array with length of n', () => {
    const n = 10;
    const randomArray = generateRandomUniqueArray(n);
    expect(randomArray.length).toBe(n);
  });

  test('generateRandomUniqueArray should generate a random array with unique elements between 1 and 100', () => {
    const n = 100;
    const randomArray = generateRandomUniqueArray(n);
    const uniqueArray = [...new Set(randomArray)];
    expect(randomArray.length).toBe(uniqueArray.length);
  });

  test('generateRandomUniqueArray should throw an error if n is greater than 100', () => {
    const n = 101;
    expect(() => generateRandomUniqueArray(n)).toThrow();
  });

  test('generateRandomUniqueArray should throw an error if n is less than 1', () => {
    const n = 0;
    expect(() => generateRandomUniqueArray(n)).toThrow();
  });
});