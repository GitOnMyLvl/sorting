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
  const button3 = document.createElement('button');
  const button4 = document.createElement('button');
  const button5 = document.createElement('button');

  button.textContent = 'Quick';
  button2.textContent = 'Merge';
  button3.textContent = 'Bubble';
  button4.textContent = 'Selection';
  button5.textContent = 'Insertion';

  async function quickSorting() {
    const array2 = [70, 10, 100, 50, 80, 30, 20, 40, 90, 60];
    const quickSort = new QuickSort(barDisplay.displayArray.bind(barDisplay), array2);
    await quickSort.recursiveSort();
  }

  async function mergeSorting() {
    const array = [71, 76, 85, 7, 44, 54, 39, 65, 75, 93, 32, 21, 33, 90, 37, 69, 72, 6, 8,
      23, 63, 88, 99, 28, 51, 19, 73, 13, 48, 22, 46, 87, 14, 79, 3, 36, 70, 25, 68,
      60, 34, 58, 10, 2, 77, 42, 17, 61, 47, 40, 26, 52, 91, 55, 11, 100, 84, 15, 98,
      5, 35, 64, 78, 97, 29, 30, 83, 43, 16, 81, 9, 24, 20, 18, 53, 67, 80, 31, 12, 96,
      92, 89, 49, 50, 66, 86, 62, 82, 45, 27, 95, 59, 41, 1, 94, 38, 57, 74, 56, 4];
    const mergeSort = new MergeSort(barDisplay.displayArray.bind(barDisplay), array);
    await mergeSort.recursiveSort();
  }

  async function bubbleSorting() {
    const array = [70, 10, 100, 50, 80, 30, 20, 40, 90, 60];
    const bubbleSort = new BubbleSort(barDisplay.displayArray.bind(barDisplay), array);
    await bubbleSort.recursiveSort();
  }

  async function selectionSorting() {
    const array = [70, 10, 100, 50, 80, 30, 20, 40, 90, 60];
    const selectionSort = new SelectionSort(barDisplay.displayArray.bind(barDisplay), array);
    console.log(await selectionSort.iterativeSort());
  }

  async function insertionSorting() {
    const array = [70, 10, 100, 50, 80, 30, 20, 40, 90, 60];
    const insertionSort = new InsertionSort(barDisplay.displayArray.bind(barDisplay), array);
    await insertionSort.recursiveSort();
  }

  button.addEventListener('click', () => {
    quickSorting();
  });
  button2.addEventListener('click', () => {
    mergeSorting();
  });
  button3.addEventListener('click', () => {
    bubbleSorting();
  });
  button4.addEventListener('click', () => {
    selectionSorting();
  });
  button5.addEventListener('click', () => {
    insertionSorting();
  });
  document.body.appendChild(button);
  document.body.appendChild(button2);
  document.body.appendChild(button3);
  document.body.appendChild(button4);
  document.body.appendChild(button5);
});
