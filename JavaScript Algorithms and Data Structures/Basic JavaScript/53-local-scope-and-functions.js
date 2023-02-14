function myLocalScope() {
  let myVar = 10;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
  console.log("outside myLocalScope", myVar);