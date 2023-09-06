function largestOfFour(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++){
   let largestNamber = arr[i][0]
  
    for (let j = 1; j < arr[i].length; j++){
      
       if(arr[i][j] > largestNamber) {
          console.log(largestNamber)
         largestNamber = arr[i][j]
         
       }
    }

    result.push(largestNamber)
  }
  return result
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
