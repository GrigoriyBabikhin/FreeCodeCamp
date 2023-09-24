const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  let newArr = arr.slice().sort((a ,b) => a - b)
  return newArr
  // Only change code above this line
}

console.log(nonMutatingSort([1, 30, 4, 21, 100000]));