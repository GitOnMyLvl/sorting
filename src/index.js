import './styles/style.css';
import SortManager from './handlers/SortManager';
import FormManager from './visual/FormManager';
import VisualizeArrayManager from './visual/VisualizeArrayManager';

document.addEventListener('DOMContentLoaded', () => {
  const sortManager = new SortManager();
  const arrayContainer = document.getElementById('arrayContainer');
  const visualizeArray = new VisualizeArrayManager(arrayContainer);
  sortManager.visualizeArray = visualizeArray;
  const formContainer = document.getElementById('formContainer');
  const formManager = new FormManager(formContainer, sortManager);
  formManager.setupEventListeners();
});
