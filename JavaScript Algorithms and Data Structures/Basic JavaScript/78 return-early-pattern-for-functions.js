// Setup
function abTest(a, b) {
  // Only change code below this line

if (a <= -1 || b<=-1){
  return
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
console.log(abTest(0,-2))