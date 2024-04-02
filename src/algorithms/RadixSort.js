import BaseSort from './BaseSort';

class RadixSort extends BaseSort {
  async sort() {
    if (!this.skipDisplay) await this.display(this.array);
    const maxDigits = this.getMaxDigits();
    for (let i = 0; i < maxDigits; i += 1) {
      await this.sortDigit(i);
    }
    await this.display(this.array);
  }

  getMaxDigits() {
    // finds the number of digits of the largest number
    return this.array.reduce((max, n) => Math.max(max, Math.floor(Math.log10(Math.abs(n))) + 1), 0);
  }

  async sortDigit(digit) {
    const buckets = Array.from({ length: 10 }, () => []);
    const divisor = 10 ** digit;
    this.array.forEach((num) => {
      const bucketIndex = Math.floor((num / divisor) % 10);
      buckets[bucketIndex].push(num);
    });

    // combines the buckets back into the array
    this.array = buckets.flatMap((bucket) => bucket);
    if (!this.skipDisplay) await this.display(this.array);
  }
}

export default RadixSort;
