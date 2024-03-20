import BaseSort from './BaseSort';

class MergeSort extends BaseSort {
  async recursiveSort(start = 0, end = this.array.length - 1) {
    if (start >= end) return this.array;
    const middle = Math.floor((start + end) / 2);
    const preSortHighlights = { [start]: 'swap-target', [middle]: 'current', [end]: 'pivot' };
    await this.display(this.array, preSortHighlights);

    await this.recursiveSort(start, middle);
    await this.recursiveSort(middle + 1, end);

    await this.merge(start, middle, end);
    await this.display(this.array);
    return this.array;
  }

  async merge(start, middle, end) {
    const tempArray = [];
    let left = start;
    let right = middle + 1;

    while (left <= middle && right <= end) {
      const nextElementIndex = (this.array[left] < this.array[right]) ? left : right;
      const highlights = { [nextElementIndex]: 'swap' };
      await this.display(this.array, highlights);
      if (this.array[left] < this.array[right]) {
        tempArray.push(this.array[left]);
        left += 1;
      } else {
        tempArray.push(this.array[right]);
        right += 1;
      }
    }
    while (left <= middle) {
      tempArray.push(this.array[left]);
      left += 1;
    }
    while (right <= end) {
      tempArray.push(this.array[right]);
      right += 1;
    }

    for (let i = start; i <= end; i += 1) {
      this.array[i] = tempArray[i - start];
      const placementHighlight = { [i]: 'placed' };
      await this.display(this.array, placementHighlight);
    }

    await this.display(this.array);
  }
}

export default MergeSort;
