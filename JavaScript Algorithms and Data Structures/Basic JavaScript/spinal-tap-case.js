function spinalCase(str) {
  let camelCash = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let space = camelCash.replace(/\s|_/g, "-")
  return space.toLowerCase();
}

spinalCase('This Is Spinal Tap');