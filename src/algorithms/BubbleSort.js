import BaseSort from './BaseSort';

class BubbleSort extends BaseSort {
  iterativeSort() {
    console.log(`Iterativ${this.array}`);
    let n = this.array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n; i += 1) {
        console.log(i);
        if (this.array[i] > this.array[i + 1]) {
          const temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
          swapped = true;
        }
      }
      n -= 1;
    } while (swapped);
    console.log(this.array);
    return this.array;
  }

  recursiveSort(n = this.array.length) {
    console.log(`Recursive:${this.array} n: ${n}`);
    if (n <= 1) return this.array;
    for (let i = 0; i < n - 1; i += 1) {
      console.log(this.array[i], this.array[i + 1]);
      if (this.array[i] > this.array[i + 1]) {
        const temp = this.array[i];
        this.array[i] = this.array[i + 1];
        this.array[i + 1] = temp;
      }
      console.log(this.array);
    }
    this.recursiveSort(n - 1);
    return this.array;
  }
}

export default BubbleSort;
