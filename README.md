# Sorting Visualizer

## Summary
Sorting Visualizer is a project to visualize different sorting algorithms. Users can choose between sorting algorithms, change the size of the array and the delay, choose if the array can use duplicate values and if the recursive version of the algorithm is used (if possible/implemented)

## Features
- Visulize different sorting algorithms including: Quick Sort, Merge Sort, Bubble Sort, Selection Sort, Insertion Sort, Heap Sort, Radix Sort.
- Customizable array size and delay for visualization
- Option to allow duplicate numbers and use recursive algorithm
- Visualization of the sorting process with marking the elements that are compared and changed.

## Live-Demo
Live-Demo here:
'https://gitonmylvl.github.io/sorting/'

## Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/GitOnMyLvl/sorting.git
   cd sorting
   ```
2. **Install dependencies**
  ```bash
   npm install
   ```
3. **Start server**
  ```bash
   npm start
   ```

## Usage

1. If the browser does not open, navigate to 'http://localhost:9000'.
2. Choose an algorithm.
3. Change the array size, the delay and other options.
4. Click 'Start' button to start the visualization.
5. Click 'Skip' button to skip visualization.

## Tests
To start tests and see code-coverage use:
```bash
npm test
```

## Code structure

sorting/
├── src/
│   ├── algorithms/
│   │   ├── BaseSort.js
│   │   ├── BubbleSort.js
│   │   ├── HeapSort.js
│   │   ├── InsertionSort.js
│   │   ├── MergeSort.js
│   │   ├── QuickSort.js
│   │   ├── RadixSort.js
│   │   └── SelectionSort.js
│   ├── handlers/
│   │   ├── SortManager.js
│   │   └── arrayUtilities.js
├── │ images/
│   │   ├── less.svg
│   │   └── more.svg
│   ├── screens/
│   │   ├── FormManager.js
│   │   └── VisualizeArrayManager.js
│   ├── styles/
│   │   └──style.css
│   ├── index.html
│   └── index.js
├── tests/
│   ├── arrayUtilities.test.js
│   ├── BaseSort.test.js
│   ├── FormManager.test.js
│   ├── sortAlgorithmTests.js
│   ├── SortAlgorithmTests.test.js
│   ├── SortManager.test.js
│   └── VisualizeArrayManager.test.js

## License
This project is licensed under the ISC licence. See LICENCE.md file



