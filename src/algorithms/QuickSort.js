import BaseSort from './BaseSort';

class QuickSort extends BaseSort {
  async recursiveSort(start = 0, end = this.array.length - 1) {
    if (start < end) {
      const pivotIndex = await this.partitioning(start, end);
      await QuickSort.delay(1000);
      this.display(this.array);
      await this.recursiveSort(start, pivotIndex - 1);
      await this.recursiveSort(pivotIndex + 1, end);
    }
    return this.array;
  }

  async partitioning(start, end) {
    console.log(`Partitioning: ${start}+${end}`);
    const pivot = this.array[end];
    let i = start - 1;

    for (let j = start; j < end; j += 1) {
      if (pivot >= this.array[j]) {
        i += 1;
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      }
      const highlights = { [i]: 'swap-target', [j]: 'current', [end]: 'pivot' };
      this.display(this.array, highlights);
      await QuickSort.delay(1000);
    }
    const finalHighlights = { [i + 1]: 'pivot-final', [end]: 'pivot-final' };
    this.display(this.array, finalHighlights);
    [this.array[i + 1], this.array[end]] = [this.array[end], this.array[i + 1]];
    return i + 1;
  }
}

export default QuickSort;