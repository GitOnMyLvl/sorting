import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';
import SelectionSort from './algorithms/SelectionSort';
import InsertionSearch from './algorithms/InsertionSort';

document.addEventListener('DOMContentLoaded', () => {
  const array = [7, 1, 5, 8, 3, 2, 4, 9, 6];
  const array2 = [15, 23, 7, 9, 18, 99, 12];
  const button = document.createElement('button');
  button.textContent = 'Button';
  button.addEventListener('click', () => {
    const insertionSearch = new InsertionSearch([...array2]);
    console.log(insertionSearch.recursiveSort());
  });
  document.body.appendChild(button);
});
