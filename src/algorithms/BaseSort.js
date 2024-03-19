class BaseSort {
  constructor(displayCallback, array = []) {
    this.displayCallback = displayCallback;
    this.array = array;
  }

  setArray(newArray) {
    this.array = [...newArray];
  }

  static delay(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms); });
  }

  display(array, highlights) {
    if (this.displayCallback) {
      this.displayCallback(array, highlights);
    }
  }
}

export default BaseSort;
