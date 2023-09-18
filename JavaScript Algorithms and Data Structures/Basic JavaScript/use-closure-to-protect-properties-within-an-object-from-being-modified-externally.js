function Bird() {
   let weight = 15;

   this.getWeight = function() {
     return weight;
   }
}

let bigBird = new Bird();

console.log(bigBird.getWeight());
bigBird.weight += 1;
console.log(bigBird.getWeight());
