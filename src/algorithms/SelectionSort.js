import BaseSort from './BaseSort';

class SelectionSort extends BaseSort {
  iterativeSort() {
    const n = this.array.length;
    if (n <= 0) return this.array;
    for (let i = 0; i < n - 1; i += 1) {
      let smallestIndex = i;
      for (let j = i + 1; j < n; j += 1) {
        if (this.array[j] < this.array[smallestIndex]) {
          smallestIndex = j;
        }
      }
      if (i !== smallestIndex) {
        const temp = this.array[i];
        this.array[i] = this.array[smallestIndex];
        this.array[smallestIndex] = temp;
      }
    }
    return this.array;
  }

  recursiveSort(n = this.array.length) {
    if (n <= 1) return this.array;
    let largestIndex = n - 1;
    for (let i = 0; i <= n - 1; i += 1) {
      if (this.array[i] > this.array[largestIndex]) {
        largestIndex = i;
      }
    }
    if (largestIndex !== n - 1) {
      const temp = this.array[n - 1];
      this.array[n - 1] = this.array[largestIndex];
      this.array[largestIndex] = temp;
    }
    this.recursiveSort(n - 1);
    return this.array;
  }
}

export default SelectionSort;
