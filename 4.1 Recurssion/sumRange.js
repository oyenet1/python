let sumRange = (num) => {
  let sum = 0;
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
};

console.log(sumRange(4));
