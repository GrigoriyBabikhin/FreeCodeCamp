function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a-b).indexOf(num);
}

console.log(getIndexToIns([5, 3, 20, 3], 5));