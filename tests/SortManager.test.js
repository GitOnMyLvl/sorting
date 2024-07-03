import SortManager from '../src/handlers/SortManager';
import QuickSort from '../src/algorithms/QuickSort';
import MergeSort from '../src/algorithms/MergeSort';
import BubbleSort from '../src/algorithms/BubbleSort';
import SelectionSort from '../src/algorithms/SelectionSort';
import InsertionSort from '../src/algorithms/InsertionSort';
import HeapSort from '../src/algorithms/HeapSort';
import RadixSort from '../src/algorithms/RadixSort';

jest.mock('../src/algorithms/QuickSort');
jest.mock('../src/algorithms/MergeSort');
jest.mock('../src/algorithms/BubbleSort');
jest.mock('../src/algorithms/SelectionSort');
jest.mock('../src/algorithms/InsertionSort');
jest.mock('../src/algorithms/HeapSort');
jest.mock('../src/algorithms/RadixSort');

describe('SortManager', () => {
  let sortManager;
  let mockDisplayArray;

  beforeEach(() => {
    sortManager = new SortManager();
    mockDisplayArray = jest.fn();
    sortManager.visualizeArray = {
      displayArray: mockDisplayArray
    };
  });

  test('should initialize with null currentSortInstance', () => {
    expect(sortManager.currentSortInstance).toBeNull();
    expect(sortManager.visualizeArray).not.toBeNull();
  });

  test('should perform sorting with QuickSort', () => {
    sortManager.performSorting('QuickSort', [1, 2, 3], true, 100);
    expect(QuickSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(QuickSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with MergeSort', () => {
    sortManager.performSorting('MergeSort', [1, 2, 3], true, 100);
    expect(MergeSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(MergeSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with BubbleSort', () => {
    sortManager.performSorting('BubbleSort', [1, 2, 3], true, 100);
    expect(BubbleSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(BubbleSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with SelectionSort', () => {
    sortManager.performSorting('SelectionSort', [1, 2, 3], true, 100);
    expect(SelectionSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(SelectionSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with InsertionSort', () => {
    sortManager.performSorting('InsertionSort', [1, 2, 3], true, 100);
    expect(InsertionSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(InsertionSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with HeapSort', () => {
    sortManager.performSorting('HeapSort', [1, 2, 3], true, 100);
    expect(HeapSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(HeapSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should perform sorting with RadixSort', () => {
    sortManager.performSorting('RadixSort', [1, 2, 3], true, 100);
    expect(RadixSort).toHaveBeenCalledWith(expect.any(Function), [1, 2, 3], 100);
    expect(RadixSort.mock.instances[0].sort).toHaveBeenCalledWith(true);
  });

  test('should toggle skip display', () => {
    sortManager.currentSortInstance = {
      toggleSkipDisplay: jest.fn()
    };
    sortManager.toggleSkipDisplay();
    expect(sortManager.currentSortInstance.toggleSkipDisplay).toHaveBeenCalled();
  });

  test('should display current array', () => {
    sortManager.currentSortInstance = {
      displayCallback: jest.fn(),
      array: [1, 2, 3]
    };
    sortManager.displayCurrentArray();
    expect(sortManager.currentSortInstance.displayCallback).toHaveBeenCalledWith([1, 2, 3]);
  });
});
