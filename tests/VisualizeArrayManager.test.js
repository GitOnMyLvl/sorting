import '@testing-library/jest-dom';
import VisualizeArrayManager from '../src/screens/VisualizeArrayManager';

describe('VisualizeArrayManager', () => {
  let container;
  let visualizeArrayManager;

  beforeEach(() => {
    container = document.createElement('div');
    container.style.height = '500px';
    document.body.appendChild(container);
    visualizeArrayManager = new VisualizeArrayManager(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('should initialize array correctly', () => { 
    expect(visualizeArrayManager.container).toBe(container);
   });

   test('should display array correctly', () => {
    const array = [9, 5, 1, 3, 6];
    visualizeArrayManager.displayArray(array);
    const arrayBars = container.querySelectorAll('.array-bar');
    expect(arrayBars).toHaveLength(array.length);
    arrayBars.forEach((bar, index) => {
      const expectedHeight = (array[index] / Math.max(...array)) * (container.clientHeight - 20);
      expect(bar).toHaveStyle(`height: ${expectedHeight}px`);
    });
   });

   test('should display array with highlights correctly', () => {
    const array = [9, 5, 1, 3, 6];
    const highlights = { 0: 'current', 1: 'swap' };
    visualizeArrayManager.displayArray(array, highlights);
    const arrayBars = container.querySelectorAll('.array-bar');
    expect(arrayBars).toHaveLength(array.length);
    arrayBars.forEach((bar, index) => {
      const expectedHeight = (array[index] / Math.max(...array)) * (container.clientHeight - 20);
      expect(bar).toHaveStyle(`height: ${expectedHeight}px`);
      if (highlights[index]) {
        expect(bar).toHaveClass(highlights[index]);
      }
    });
   });

   test('should adjust element widths correctly', () => {
    const array = [9, 5, 1, 3, 6];
    visualizeArrayManager.displayArray(array);
    VisualizeArrayManager.adjustElementWidths();
    const arrayBars = container.querySelectorAll('.array-bar');
    arrayBars.forEach((bar) => {
      expect(bar).toHaveStyle('width: 20%');
    });
   });
});