function mutation(arr) {

  const stringComparison = function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    }

  return arr[1]         
  .toLowerCase()
  .split("")
  .every(stringComparison);

}

console.log(mutation(["Noel", "Ole"]));