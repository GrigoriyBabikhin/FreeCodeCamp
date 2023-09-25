function diffArray(arr1, arr2) {
  const newArr = [];

   function arrayComparison(first, second) {
     first.forEach(number => {
      if(second.indexOf(number) === -1) {
           newArr.push(number) 
      }
    });
   }

    arrayComparison(arr1, arr2)
    arrayComparison(arr2, arr1)

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));