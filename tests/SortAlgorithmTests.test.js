import QuickSort from '../src/algorithms/QuickSort';
import MergeSort from '../src/algorithms/MergeSort';
import BubbleSort from '../src/algorithms/BubbleSort';
import SelectionSort from '../src/algorithms/SelectionSort';
import InsertionSort from '../src/algorithms/InsertionSort';
import HeapSort from '../src/algorithms/HeapSort';
import RadixSort from '../src/algorithms/RadixSort';

import runSortTests from './sortAlgorithmTests';


runSortTests(QuickSort, 'QuickSort');
runSortTests(MergeSort, 'MergeSort')
runSortTests(BubbleSort, 'BubbleSort');
runSortTests(SelectionSort, 'SelectionSort');
runSortTests(InsertionSort, 'InsertionSort')
runSortTests(HeapSort, 'HeapSort');
runSortTests(RadixSort, 'RadixSort')

