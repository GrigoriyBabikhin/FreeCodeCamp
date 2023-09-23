const squareList = arr => {
  // Only change code below this line
  let realNumberArray = arr.filter( arr => {
    if (arr > 0)
    return Number.isInteger(arr) 
  });

  let squaredIntegers = realNumberArray.map( 
    realNumberArray => {
      return realNumberArray ** 2 
    }
  )

  return squaredIntegers;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);