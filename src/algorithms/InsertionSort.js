import BaseSort from './BaseSort';

class InsertionSort extends BaseSort {
  async iterativeSort() {
    const n = this.array.length;
    if (n <= 1) return;
    for (let i = 1; i < n; i += 1) {
      const current = this.array[i];
      let j = i - 1;
      if (!this.skipDisplay) await this.display(this.array, { [i]: 'current' });
      while (this.array[j] > current && j >= 0) {
        if (!this.skipDisplay) await this.display(this.array, { [j]: 'current', [i]: 'marked' });
        this.array[j + 1] = this.array[j];
        j -= 1;
      }
      this.array[j + 1] = current;
      if (!this.skipDisplay) await this.display(this.array, { [j + 1]: 'swap' });
    }
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    await this.recursiveSort(n - 1);
    const current = this.array[n - 1];
    let j = n - 2;
    if (!this.skipDisplay) await this.display(this.array, { [n - 1]: 'current' });
    while (this.array[j] > current && j >= 0) {
      if (!this.skipDisplay) await this.display(this.array, { [j]: 'current', [n - 1]: 'marked' });
      this.array[j + 1] = this.array[j];
      j -= 1;
    }
    this.array[j + 1] = current;
    if (!this.skipDisplay) await this.display(this.array, { [j + 1]: 'swap' });
  }

  async sort(recursive) {
    if (recursive) await this.recursiveSort();
    else await this.iterativeSort();
    await this.display(this.array);
  }
}

export default InsertionSort;
