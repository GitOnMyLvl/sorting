import BaseSort from './BaseSort';

class BubbleSort extends BaseSort {
  iterativeSort() {
    let n = this.array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n; i += 1) {
        if (this.array[i] > this.array[i + 1]) {
          const temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
          swapped = true;
        }
      }
      n -= 1;
    } while (swapped);
    return this.array;
  }

  recursiveSort(n = this.array.length) {
    if (n <= 1) return this.array;
    for (let i = 0; i < n - 1; i += 1) {
      if (this.array[i] > this.array[i + 1]) {
        const temp = this.array[i];
        this.array[i] = this.array[i + 1];
        this.array[i + 1] = temp;
      }
    }
    this.recursiveSort(n - 1);
    return this.array;
  }
}

export default BubbleSort;
