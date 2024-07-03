import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/dom';
import FormManager from '../src/screens/FormManager';
import SortManager from '../src/handlers/SortManager';

describe('FormManager', () => {
  let container;
  let sortManager;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    sortManager = new SortManager();
    const visualizeArrayMock = { displayArray: jest.fn() };
    sortManager.visualizeArray = visualizeArrayMock;
    performSortingSpy = jest.spyOn(sortManager, 'performSorting');
    const formManager = new FormManager(container, sortManager);
    formManager.setupEventListeners();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('should update algorithm description on dropdown change', () => {
    const sortDropdown = screen.getByLabelText('Sort Algorithm:');
    const algorithmDescription = screen.getByText('Quick Sort is a divide and conquer algorithm that picks an element as pivot and partitions the given array around the picked pivot. The key process in quickSort is partition.');
    fireEvent.change(sortDropdown, { target: { value: 'BubbleSort' } });
    expect(algorithmDescription.innerHTML).toBe('Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.');
  });

  test('should update algorithm description on dropdown change', () => {
    const sortDropdown = screen.getByLabelText('Sort Algorithm:');
    const algorithmDescription = screen.getByText('Quick Sort is a divide and conquer algorithm that picks an element as pivot and partitions the given array around the picked pivot. The key process in quickSort is partition.');
    fireEvent.change(sortDropdown, { target: { value: 'MergeSort' } });
    expect(algorithmDescription.innerHTML).toBe('Merge Sort is a divide and conquer algorithm that divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.');
  });

  test('should render form correctly', () => { 
    expect(screen.getByLabelText('Sort Algorithm:')).toBeInTheDocument();
    expect(screen.getByLabelText('Array Size (5-100):')).toBeInTheDocument();
    expect(screen.getByLabelText('Display Delay (ms):')).toBeInTheDocument();
    expect(screen.getByLabelText('Use Recursive (when available):')).toBeInTheDocument();
    expect(screen.getByLabelText('Allow Duplicates:')).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Skip')).toBeInTheDocument();
   })

  test('should call performSorting with correct parameters on form submit', () => {
    const performSortingSpy = jest.spyOn(sortManager, 'performSorting');
    const arraySizeInput = screen.getByLabelText('Array Size (5-100):');
    const displayDelayInput = screen.getByLabelText('Display Delay (ms):');
    const sortDropdown = screen.getByLabelText('Sort Algorithm:');
    const recursiveCheckbox = screen.getByLabelText('Use Recursive (when available):');
    const allowDuplicatesCheckbox = screen.getByLabelText('Allow Duplicates:');

    fireEvent.change(arraySizeInput, { target: { value: '10' } });
    fireEvent.change(displayDelayInput, { target: { value: '1000' } });
    fireEvent.change(sortDropdown, { target: { value: 'BubbleSort' } });
    fireEvent.click(recursiveCheckbox);
    fireEvent.click(allowDuplicatesCheckbox);

    const form = container.querySelector('form');
    fireEvent.submit(form);

    expect(performSortingSpy).toHaveBeenCalledWith('BubbleSort', expect.any(Array), true, 1000);
  });
  
  test('should minimize on button click', () => {
    const minimizeButton = container.querySelector('.minmax');
    const form = container.querySelector('.sortForm');
    fireEvent.click(minimizeButton);
    expect(form).toHaveClass('minimized');
  })
});