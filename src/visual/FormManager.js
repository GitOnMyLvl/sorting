import generateRandomArray from '../handlers/arrayUtilities';

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
        
        <label for="recursive">Use Recursive:</label>
        <input type="checkbox" id="recursive" name="recursive">

        <label for="allowDuplicates">Allow Duplicates:</label>
        <input type="checkbox" id="allowDuplicates" name="allowDuplicates">

        <button type="submit">Start</button>
        <button type="button" id="skip">Skip</button>

        </form>
    `;

    this.container.innerHTML = html;
  }

  setupEventListeners() {
    const form = document.getElementById('sortForm');
    const skipButton = document.getElementById('skip');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const sortType = document.getElementById('sortType').value;
      const arraySize = document.getElementById('arraySize').value;
      const recursive = document.getElementById('recursive').checked;
      const array = generateRandomArray(arraySize);
      // const allowDuplicates = document.getElementById('allowDuplicates').checked;
      console.log(sortType, arraySize, recursive, array);

      this.sortManager.performSorting(sortType, array, recursive);
    });

    skipButton.addEventListener('click', () => {
      this.sortManager.toggleSkipDisplay();
    });
  }
}

export default FormManager;
