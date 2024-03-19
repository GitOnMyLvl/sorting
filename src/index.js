import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import QuickSort from './algorithms/QuickSort';
import DisplayBars from './visual/DisplayBars';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('arrayContainer');
  const barDisplay = new DisplayBars(container);
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  button.textContent = 'Button';
  button2.textContent = 'Button2';

  async function quickSorting() {
    const array2 = [15, 23, 7, 6, 12, 9, 22, 77, 99, 56];
    const quickSort = new QuickSort(barDisplay.displayArray.bind(barDisplay), array2);
    await quickSort.recursiveSort();
  }

  async function mergeSorting() {
    const array = [70, 10, 50, 80, 30, 20, 40, 90, 60, 10];
    const mergeSort = new MergeSort(barDisplay.displayArray.bind(barDisplay), array);
    await mergeSort.recursiveSort();
  }
  button.addEventListener('click', () => {
    mergeSorting();
  });
  button2.addEventListener('click', () => {
    quickSorting();
  });

  document.body.appendChild(button);
  document.body.appendChild(button2);
});
