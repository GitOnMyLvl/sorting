import BaseSort from './BaseSort';

class HeapSort extends BaseSort {
  async sort() {
    if (!this.skipDisplay) await this.display(this.array);
    const n = this.array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
      await this.heapify(n, i);
    }

    for (let i = n - 1; i > 0; i -= 1) {
      [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'placed', 0: 'swap' });
      await this.heapify(i, 0);
    }
    await this.display(this.array);
  }

  async heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (!this.skipDisplay) await this.display(this.array, { [i]: 'current' });
    if (left < n && this.array[left] > this.array[largest]) {
      largest = left;
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'current', [largest]: 'swap-target' });
    }

    if (right < n && this.array[right] > this.array[largest]) {
      largest = right;
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'current', [largest]: 'swap-target' });
    }
    if (largest !== i) {
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'swap', [largest]: 'swap' });
      [this.array[i], this.array[largest]] = [this.array[largest], this.array[i]];
      await this.heapify(n, largest);
    }
  }
}

export default HeapSort;
