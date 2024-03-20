import BaseSort from './BaseSort';

class InsertionSort extends BaseSort {
  async iterativeSort() {
    const n = this.array.length;
    if (n <= 1) return;
    for (let i = 1; i < n; i += 1) {
      const current = this.array[i];
      let j = i - 1;
      await this.display(this.array, { [i]: 'current' });
      while (this.array[j] > current && j >= 0) {
        await this.display(this.array, { [j]: 'shifting', [i]: 'current' });
        this.array[j + 1] = this.array[j];
        j -= 1;
      }
      this.array[j + 1] = current;
      await this.display(this.array, { [j + 1]: 'placed' });
    }
    await this.display(this.array);
  }

  async recursiveSort(n = this.array.length) {
    if (n <= 1) return;
    await this.recursiveSort(n - 1);
    const current = this.array[n - 1];
    let j = n - 2;
    await this.display(this.array, { [n - 1]: 'current' });
    while (this.array[j] > current && j >= 0) {
      await this.display(this.array, { [j]: 'shifting', [n - 1]: 'current' });
      this.array[j + 1] = this.array[j];
      j -= 1;
    }
    this.array[j + 1] = current;
    await this.display(this.array, { [j + 1]: 'placed' });
    await this.display(this.array);
  }
}

export default InsertionSort;
