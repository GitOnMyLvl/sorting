import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import QuickSort from './algorithms/QuickSort';
import DisplayBars from './visual/DisplayBars';
import HeapSort from './algorithms/HeapSort';
import RadixSort from './algorithms/RadixSort';
import generateRandomArray from './handlers/arrayUtilities';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('arrayContainer');
  const barDisplay = new DisplayBars(container);
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');
  const button4 = document.createElement('button');
  const button5 = document.createElement('button');
  const button6 = document.createElement('button');
  const button7 = document.createElement('button');
  const button8 = document.createElement('button');

  button.textContent = 'Quick';
  button2.textContent = 'Merge';
  button3.textContent = 'Bubble';
  button4.textContent = 'Selection';
  button5.textContent = 'Insertion';
  button6.textContent = 'Heap';
  button7.textContent = 'Radix';
  button8.textContent = 'Skip';

  const performSorting = async (SortClass, array, recursive = true) => {
    const sortInstance = new SortClass(barDisplay.displayArray.bind(barDisplay), array);
    button8.addEventListener('click', () => {
      sortInstance.toggleSkipDisplay();
    });
    await sortInstance.sort(recursive);
  };

  button.addEventListener('click', () => {
    performSorting(QuickSort, generateRandomArray(15));
  });
  button2.addEventListener('click', () => {
    performSorting(MergeSort, generateRandomArray(15));
  });
  button3.addEventListener('click', () => {
    performSorting(BubbleSort, generateRandomArray(5));
  });
  button4.addEventListener('click', () => {
    performSorting(SelectionSort, generateRandomArray(15));
  });
  button5.addEventListener('click', () => {
    performSorting(InsertionSort, generateRandomArray(15));
  });
  button6.addEventListener('click', () => {
    performSorting(HeapSort, generateRandomArray(10));
  });
  button7.addEventListener('click', () => {
    performSorting(RadixSort, generateRandomArray(15));
  });

  document.body.appendChild(button);
  document.body.appendChild(button2);
  document.body.appendChild(button3);
  document.body.appendChild(button4);
  document.body.appendChild(button5);
  document.body.appendChild(button6);
  document.body.appendChild(button7);
  document.body.appendChild(button8);
});
