function destroyer(arr) {
  let result = [];
  let dataArray = Object.values(arguments)[0];
  let findAndDestroy = Object.values(arguments).slice(1)
  
  for (let i = 0; i < dataArray.length; i++ ){
    if(findAndDestroy.indexOf(dataArray[i]) === -1){
      result.push(dataArray[i])
    }
  }

  return result;
}

let values = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(values)