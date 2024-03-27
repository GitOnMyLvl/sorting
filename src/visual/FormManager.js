import { generateRandomArray, generateRandomUniqueArray } from '../handlers/arrayUtilities';

class FormManager {
  constructor(container, sortManager) {
    this.container = container;
    this.sortManager = sortManager;
    this.createForm();
    this.setupEventListeners();
  }

  createForm() {
    const html = `
      <form id="sortForm">
        <label for="sortType">Sort Algorithm:</label>
        <select id="sortType" name="sortType">
          <option value="QuickSort">Quick Sort</option>
          <option value="MergeSort">Merge Sort</option>
          <option value="BubbleSort">Bubble Sort</option>
          <option value="SelectionSort">Selection Sort</option>
          <option value="InsertionSort">Insertion Sort</option>
          <option value="HeapSort">Heap Sort</option>
          <option value="RadixSort">Radix Sort</option>
        </select>
        
        <label for="arraySize">Array Size:</label>
        <input type="number" id="arraySize" name="arraySize" min="5" max="100" value="15"> 
        
        <label for="displayDelay">Display Delay (ms):</label>
        <input type="number" id="displayDelay" name="displayDelay" value="500" min="0" max="10000">

        <label for="recursive">Use Recursive:</label>
        <input type="checkbox" id="recursive" name="recursive">

        <label for="allowDuplicates">Allow Duplicates:</label>
        <input type="checkbox" id="allowDuplicates" name="allowDuplicates">

        <button type="submit">Start</button>
        <button type="button" id="skip">Skip</button>

        </form>
        <div id="algorithmDescription"></div>
    `;

    this.container.innerHTML = html;
  }

  setupEventListeners() {
    const descriptions = {
      QuickSort: 'Quick Sort is a divide and conquer algorithm that picks an element as pivot and partitions the given array around the picked pivot. The key process in quickSort is partition.',
      MergeSort: 'Merge Sort is a divide and conquer algorithm that divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.',
      BubbleSort: 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.',
      SelectionSort: 'Selection Sort divides the input list into two parts: items already sorted and items remaining to be sorted. The algorithm selects the smallest/largest element from the unsorted list in each iteration.',
      InsertionSort: 'Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It places the current element at its correct position in the sorted array.',
      HeapSort: 'Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end.',
      RadixSort: 'Radix Sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. (only simple visualization)',
    };

    const form = document.getElementById('sortForm');
    const sortDropdown = document.getElementById('sortType');
    const algorithmDescription = document.getElementById('algorithmDescription');
    const skipButton = document.getElementById('skip');
    algorithmDescription.innerHTML = descriptions[sortDropdown.value];

    sortDropdown.addEventListener('change', () => {
      algorithmDescription.innerHTML = descriptions[sortDropdown.value];
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const arraySize = document.getElementById('arraySize').value;
      const displayDelay = document.getElementById('displayDelay').value;
      const sortType = document.getElementById('sortType').value;
      const recursive = document.getElementById('recursive').checked;
      const allowDuplicates = document.getElementById('allowDuplicates').checked;
      let array = [];
      if (allowDuplicates) array = generateRandomArray(arraySize);
      else array = generateRandomUniqueArray(arraySize);

      this.sortManager.performSorting(sortType, array, recursive, displayDelay);
    });

    skipButton.addEventListener('click', () => {
      this.sortManager.toggleSkipDisplay();
    });
  }
}

export default FormManager;
