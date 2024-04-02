class BaseSort {
  constructor(displayCallback, array = [], displayDelay = 500) {
    this.displayCallback = displayCallback;
    this.array = array;
    this.displayDelay = displayDelay;
    this.skipDisplay = false;
  }

  setArray(newArray) {
    this.array = [...newArray];
  }

  getArray() {
    return this.array;
  }

  static delay(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms); });
  }

  async display(array, highlights) {
    if (this.displayCallback) {
      this.displayCallback(array, highlights);
      await BaseSort.delay(this.displayDelay);
    }
  }

  toggleSkipDisplay() {
    this.skipDisplay = !this.skipDisplay;
  }
}

export default BaseSort;
