class BaseSort {
  constructor(array = []) {
    this.array = array;
  }

  setArray(newArray) {
    this.array = [...newArray];
  }
}

export default BaseSort;
