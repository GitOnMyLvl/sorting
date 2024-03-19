import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import QuickSort from './algorithms/QuickSort';

document.addEventListener('DOMContentLoaded', () => {
  const array = [7, 1, 5, 8, 3, 2, 4, 9, 6, 1];
  const array2 = [15, 23, 7, 6, 12, 9, 22, 77, 99, 56];
  const button = document.createElement('button');
  button.textContent = 'Button';
  button.addEventListener('click', () => {
    const quickSort = new QuickSort([...array2]);
    console.log(quickSort.recursiveSort());
  });
  document.body.appendChild(button);
});
