import BaseSort from './BaseSort';

class BubbleSort extends BaseSort {
  iterativeSort() {
    console.log(`Iterativ${this.array}`);
    let n = this.array.length;
    const arr = this.array;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n; i += 1) {
        console.log(i);
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n -= 1;
    } while (swapped);
    console.log(arr);
    return arr;
  }

  recursiveSort(n = this.array.length) {
    console.log(`Recursive:${this.array} n: ${n}`);
    const arr = this.array;
    if (n <= 1) return arr;
    for (let i = 0; i < n - 1; i += 1) {
      console.log(arr[i], arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      console.log(arr);
    }
    this.recursiveSort(n - 1);
    return arr;
  }
}

export default BubbleSort;
