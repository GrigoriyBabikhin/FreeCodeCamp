function whatIsInAName(collection, source) {
 let result = [];

  collection.forEach(collection => {
    let index = 0;
    for(let key in source) {
      if(collection[key] === source[key]){
        index +=1;
      } if (index === Object.keys(source).length){
        result.push(collection)
      }
    }
  })
  return result
}

let arrResult = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

console.log(arrResult)