const selectionSort = (arr) => {
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      count++;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return { arr, count };
};

let sample = [35, 23, 5, 14, 3];
let sample2 = [1, 2, 4, 12];
let sample3 = [
  13, 23, 4, 1, 52, 6, 12, 14, 3, 25, 32, 67, 134, 2, 43, 6, 8, 34, 8, 69, 15,
  23, 5, 14, 324, 33,
];

console.log(selectionSort(sample));
console.log(selectionSort(sample2));
console.log(selectionSort(sample3));
