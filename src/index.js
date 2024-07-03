import './styles/style.css';
import SortManager from './handlers/SortManager';
import FormManager from './screens/FormManager';
import VisualizeArrayManager from './screens/VisualizeArrayManager';

document.addEventListener('DOMContentLoaded', () => {
  const sortManager = new SortManager();
  const arrayContainer = document.getElementById('arrayContainer');
  const visualizeArray = new VisualizeArrayManager(arrayContainer);
  sortManager.visualizeArray = visualizeArray;
  const formContainer = document.getElementById('formContainer');
  const formManager = new FormManager(formContainer, sortManager);
  formManager.setupEventListeners();
});
