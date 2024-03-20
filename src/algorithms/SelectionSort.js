import BaseSort from './BaseSort';

class SelectionSort extends BaseSort {
  async iterativeSort() {
    const n = this.array.length;
    if (n <= 0) return;
    for (let i = 0; i < n - 1; i += 1) {
      let smallestIndex = i;
      await this.display(this.array, { [smallestIndex]: 'current' });
      for (let j = i + 1; j < n; j += 1) {
        if (this.array[j] < this.array[smallestIndex]) {
          smallestIndex = j;
          await this.display(this.array, { [smallestIndex]: 'current', [i]: 'swap-target' });
        }
      }
      if (i !== smallestIndex) {
        [this.array[i], this.array[smallestIndex]] = [this.array[smallestIndex], this.array[i]];
        await this.display(this.array, { [smallestIndex]: 'swap', [i]: 'swap' });
      }
    }
    await this.display(this.array);
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    let largestIndex = 0;
    for (let i = 0; i < n; i += 1) {
      await this.display(this.array, { [largestIndex]: 'current', [i]: 'swap-target' });
      if (this.array[i] > this.array[largestIndex]) {
        largestIndex = i;
        await this.display(this.array, { [largestIndex]: 'current' });
      }
    }
    if (largestIndex !== n - 1) {
      [this.array[n - 1], this.array[largestIndex]] = [this.array[largestIndex], this.array[n - 1]];
      await this.display(this.array, { [largestIndex]: 'swap', [n - 1]: 'swap' });
    }
    await this.recursiveSort(n - 1);
    await this.display(this.array);
  }
}

export default SelectionSort;
