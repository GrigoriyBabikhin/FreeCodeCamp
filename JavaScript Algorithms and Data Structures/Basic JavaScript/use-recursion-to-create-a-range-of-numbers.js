
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return []
  } else {
    let countArray = rangeOfNumbers(startNum, endNum -1)
    countArray.push(endNum)
    return countArray;
  }
};

console.log(rangeOfNumbers(1, 10))