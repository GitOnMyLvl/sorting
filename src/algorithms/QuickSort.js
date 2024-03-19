import BaseSort from './BaseSort';

class QuickSort extends BaseSort {
  recursiveSort(start = 0, end = this.array.length - 1) {
    if (start < end) {
      const pivotIndex = this.partitioning(start, end);
      this.recursiveSort(start, pivotIndex - 1);
      this.recursiveSort(pivotIndex + 1, end);
    }
    return this.array;
  }

  partitioning(start, end) {
    const pivot = this.array[end];
    let i = start - 1;

    for (let j = start; j < end; j += 1) {
      if (pivot >= this.array[j]) {
        i += 1;
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      }
    }
    [this.array[i + 1], this.array[end]] = [this.array[end], this.array[i + 1]];
    return i + 1;
  }
}

export default QuickSort;
