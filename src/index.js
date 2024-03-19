import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';

document.addEventListener('DOMContentLoaded', () => {
  const array = [7, 1, 5, 8, 3, 2, 4, 9, 6, 1];
  const array2 = [15, 23, 7, 9, 18, 99, 12];
  const button = document.createElement('button');
  button.textContent = 'Button';
  button.addEventListener('click', () => {
    const mergeSort = new MergeSort([...array]);
    console.log(mergeSort.recursiveSort());
  });
  document.body.appendChild(button);
});
