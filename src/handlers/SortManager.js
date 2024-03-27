import QuickSort from '../algorithms/QuickSort';
import MergeSort from '../algorithms/MergeSort';
import BubbleSort from '../algorithms/BubbleSort';
import SelectionSort from '../algorithms/SelectionSort';
import InsertionSort from '../algorithms/InsertionSort';
import HeapSort from '../algorithms/HeapSort';
import RadixSort from '../algorithms/RadixSort';

class SortManager {
  constructor() {
    this.currentSortInstance = null;
    this.visualizeArray = null;
  }

  performSorting(sortType, array, recursive, displayDelay = 500) {
    const sortClassMap = {
      QuickSort,
      MergeSort,
      BubbleSort,
      SelectionSort,
      InsertionSort,
      HeapSort,
      RadixSort,
    };
    if (this.currentSortInstance) {
      this.currentSortInstance.toggleSkipDisplay();
    }

    const SortClass = sortClassMap[sortType];
    const displayArrayBound = this.visualizeArray.displayArray.bind(this.visualizeArray);
    this.currentSortInstance = new SortClass(displayArrayBound, array, displayDelay);
    this.currentSortInstance.sort(recursive);
  }

  toggleSkipDisplay() {
    if (this.currentSortInstance) {
      this.currentSortInstance.toggleSkipDisplay();
    }
  }
}

export default SortManager;
