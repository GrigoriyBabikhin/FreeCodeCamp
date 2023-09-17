let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

function glideMixin(obj) {
  obj.glide = function() {
    console.log("I'm " + this.name + " and I'm gliding.Weee!")
  }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()