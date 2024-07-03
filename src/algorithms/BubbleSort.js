import BaseSort from './BaseSort';

class BubbleSort extends BaseSort {
  async iterativeSort() {
    let n = this.array.length;
    let swapped;
    if (!this.skipDisplay) await this.display(this.array);
    do {
      swapped = false;
      for (let i = 0; i < n; i += 1) {
        if (!this.skipDisplay) await this.display(this.array, { [i]: 'current' });
        if (this.array[i] > this.array[i + 1]) {
          if (!this.skipDisplay) await this.display(this.array, { [i]: 'swap', [i + 1]: 'swap' });
          [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
          swapped = true;
        }
      }
      n -= 1;
    } while (swapped);
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    let swapped = false;
    for (let i = 0; i < n - 1; i += 1) {
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'current' });
      if (this.array[i] > this.array[i + 1]) {
        if (!this.skipDisplay) await this.display(this.array, { [i]: 'swap', [i + 1]: 'swap' });
        [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
        swapped = true;
      }
    }
    if (swapped) await this.recursiveSort(n - 1);
  }

  async sort(recursive) {
    if (recursive) await this.recursiveSort();
    else await this.iterativeSort();
    await this.display(this.array);
  }
}

export default BubbleSort;
