import BaseSort from './BaseSort';

class SelectionSort extends BaseSort {
  async iterativeSort() {
    const n = this.array.length;
    if (n <= 0) return;
    for (let i = 0; i < n - 1; i += 1) {
      let smallestIndex = i;
      for (let j = i + 1; j < n; j += 1) {
        if (!this.skipDisplay) await this.display(this.array, { [j]: 'current', [i]: 'swap-target' });
        if (this.array[j] < this.array[smallestIndex]) {
          smallestIndex = j;
          if (!this.skipDisplay) await this.display(this.array, { [smallestIndex]: 'swap', [i]: 'swap' });
        }
      }
      if (i !== smallestIndex) {
        [this.array[i], this.array[smallestIndex]] = [this.array[smallestIndex], this.array[i]];
      }
    }
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    let largestIndex = 0;
    for (let i = 0; i < n; i += 1) {
      if (!this.skipDisplay) await this.display(this.array, { [largestIndex]: 'current', [i]: 'swap-target' });
      if (this.array[i] > this.array[largestIndex]) {
        largestIndex = i;
        if (!this.skipDisplay) await this.display(this.array, { [largestIndex]: 'current' });
      }
    }
    if (largestIndex !== n - 1) {
      [this.array[n - 1], this.array[largestIndex]] = [this.array[largestIndex], this.array[n - 1]];
      if (!this.skipDisplay) await this.display(this.array, { [largestIndex]: 'swap', [n - 1]: 'swap' });
    }
    await this.recursiveSort(n - 1);
    if (!this.skipDisplay) await this.display(this.array);
  }

  async sort(recursive) {
    if (recursive) await this.recursiveSort();
    else await this.iterativeSort();
    await this.display(this.array);
  }
}

export default SelectionSort;
