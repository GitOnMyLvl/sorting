import './styles/style.css';
import BubbleSort from './algorithms/BubbleSort';

document.addEventListener('DOMContentLoaded', () => {
  const array = [7, 1, 5, 8, 3, 2, 4, 9, 6];
  const array2 = [15, 23, 7, 9, 18, 99, 12];
  const button = document.createElement('button');
  button.textContent = 'Button';
  button.addEventListener('click', () => {
    const bubbleSort = new BubbleSort([...array2]);
    console.log(bubbleSort.iterativeSort());
    bubbleSort.setArray([...array2]);
    console.log(bubbleSort.recursiveSort());
  });
  document.body.appendChild(button);
});
