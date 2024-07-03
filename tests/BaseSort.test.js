import BaseSort from "../src/algorithms/BaseSort";

describe('BaseSort', () => {
  let displayMock;
  let array;

  beforeEach(() => {
    displayMock = jest.fn();
    array = [9, 5, 1, 3, 6];
  });

  test('should initialize with an empty array', () => {
    const baseSort = new BaseSort(displayMock, []);
    expect(baseSort.array).toEqual([]);
  });

  test('should initialize with correct values', () => {
    const baseSort = new BaseSort(displayMock, array, 1000);
    expect(baseSort.displayCallback).toBe(displayMock);
    expect(baseSort.array).toEqual(array);
    expect(baseSort.displayDelay).toBe(1000);
    expect(baseSort.skipDisplay).toBe(false);
  });

  test('should set array correctly', () => {
    const baseSort = new BaseSort(displayMock, []);
    baseSort.setArray(array);
    expect(baseSort.array).toEqual(array);
  });
  
  test('should get array correctly', () => {
    const baseSort = new BaseSort(displayMock, array);
    expect(baseSort.getArray()).toEqual(array);
  });

  test('should delay for the given time', async () => {
    const time = 1000;
    const start = Date.now();
    await BaseSort.delay(time);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(time);
  });

  test('should display array with highlights', async () => {
    const baseSort = new BaseSort(displayMock, array, 1000);
    const delaySpy = jest.spyOn(BaseSort, 'delay');
    await baseSort.display(array, { 0: 'current', 1: 'swap' });
    expect(displayMock).toHaveBeenCalledWith(array, { 0: 'current', 1: 'swap' });
    expect(delaySpy).toHaveBeenCalledWith(1000);
  });

  test('should toggle skipDisplay correctly', () => {
    const baseSort = new BaseSort(displayMock, array);
    expect(baseSort.skipDisplay).toBe(false);
    baseSort.toggleSkipDisplay();
    expect(baseSort.skipDisplay).toBe(true);
    baseSort.toggleSkipDisplay();
    expect(baseSort.skipDisplay).toBe(false);
  });
});