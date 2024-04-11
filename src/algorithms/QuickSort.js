import BaseSort from './BaseSort';

class QuickSort extends BaseSort {
  async quickSort(start = 0, end = this.array.length - 1) {
    if (start < end) {
      const pivotIndex = await this.partitioning(start, end);
      if (!this.skipDisplay) await this.display(this.array);
      await this.quickSort(start, pivotIndex - 1);
      await this.quickSort(pivotIndex + 1, end);
    }
  }

  async partitioning(start, end) {
    const pivot = this.array[end];
    let i = start - 1;

    for (let j = start; j < end; j += 1) {
      if (pivot >= this.array[j]) {
        i += 1;
        if (!this.skipDisplay) await this.display(this.array, { [i]: 'swap', [j]: 'swap', [end]: 'marked' });
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      }
      const highlights = { [i]: 'swap-target', [j]: 'current', [end]: 'marked' };
      if (!this.skipDisplay) await this.display(this.array, highlights);
    }
    const finalHighlights = { [i + 1]: 'swap', [end]: 'swap' };
    if (!this.skipDisplay) await this.display(this.array, finalHighlights);
    [this.array[i + 1], this.array[end]] = [this.array[end], this.array[i + 1]];
    return i + 1;
  }

  async sort() {
    await this.quickSort();
    await this.display(this.array);
  }
}

export default QuickSort;
