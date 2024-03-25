import BaseSort from './BaseSort';

class BubbleSort extends BaseSort {
  async iterativeSort() {
    let n = this.array.length;
    let swapped;
    await this.display(this.array);
    do {
      swapped = false;
      for (let i = 0; i < n; i += 1) {
        await this.display(this.array, { [i]: 'current' });
        if (this.array[i] > this.array[i + 1]) {
          await this.display(this.array, { [i]: 'swap', [i + 1]: 'swap' });
          [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
          swapped = true;
        }
      }
      n -= 1;
    } while (swapped);
    await this.display(this.array);
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    for (let i = 0; i < n - 1; i += 1) {
      await this.display(this.array, { [i]: 'current' });
      if (this.array[i] > this.array[i + 1]) {
        await this.display(this.array, { [i]: 'swap', [i + 1]: 'swap' });
        [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
      }
    }
    this.recursiveSort(n - 1);
    await this.display(this.array);
  }
}

export default BubbleSort;
