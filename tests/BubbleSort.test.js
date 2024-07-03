import BubbleSort from "../src/algorithms/BubbleSort";

describe('BubbleSort', () => {
  let displayMock;
  let array;
  let bubbleSort;

  beforeEach(() => {
    displayMock = jest.fn();
    array = [9, 5, 1, 3, 6];
    bubbleSort = new BubbleSort(displayMock, array, 0);
  });

  test('should sort array iteratively', async () => {
    await bubbleSort.iterativeSort();
    expect(bubbleSort.array).toEqual([1, 3, 5, 6, 9]);
  });

  test('should sort array recursively', async () => {
    await bubbleSort.recursiveSort();
    expect(bubbleSort.array).toEqual([1, 3, 5, 6, 9]);
  });

  test('should call correct method based on recursive flag', async () =>{
    const iterativeSpy = jest.spyOn(bubbleSort, 'iterativeSort');
    const recursiveSpy = jest.spyOn(bubbleSort, 'recursiveSort');

    await bubbleSort.sort(false);
    expect(iterativeSpy).toHaveBeenCalled();
    expect(recursiveSpy).not.toHaveBeenCalled();

    await bubbleSort.sort(true);
    expect(recursiveSpy).toHaveBeenCalled();
  })
});