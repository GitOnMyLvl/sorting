import BaseSort from './BaseSort';

class MergeSort extends BaseSort {
  recursiveSort(arr = this.array) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    const sortedLeft = this.recursiveSort(leftArr);
    const sortedRight = this.recursiveSort(rightArr);
    return MergeSort.merge(sortedLeft, sortedRight);
  }

  static merge(leftArray, rightArray) {
    const array = [];
    let i = 0;
    let j = 0;
    // compare numbers and push smaller number into array
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        array.push(leftArray[i]);
        i += 1;
      } else {
        array.push(rightArray[j]);
        j += 1;
      }
    }
    // handle remaining array
    while (i < leftArray.length) {
      array.push(leftArray[i]);
      i += 1;
    }
    while (j < rightArray.length) {
      array.push(rightArray[j]);
      j += 1;
    }
    return array;
  }
}

export default MergeSort;
