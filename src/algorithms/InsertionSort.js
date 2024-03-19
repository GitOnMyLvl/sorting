import BaseSort from './BaseSort';

class InsertionSort extends BaseSort {
  iterativeSort() {
    const n = this.array.length;
    if (n <= 1) return this.array;
    for (let i = 1; i < n; i += 1) {
      const current = this.array[i];
      let j = i - 1;
      while (this.array[j] > current && j >= 0) {
        this.array[j + 1] = this.array[j];
        j -= 1;
      }
      this.array[j + 1] = current;
    }
    return this.array;
  }

  recursiveSort(n = this.array.length) {
    if (n <= 1) return this.array;
    this.recursiveSort(n - 1);
    const current = this.array[n - 1];
    let j = n - 2;
    while (this.array[j] > current && j >= 0) {
      this.array[j + 1] = this.array[j];
      j -= 1;
    }
    this.array[j + 1] = current;
    return this.array;
  }
}

export default InsertionSort;
