function testGreaterOrEqual(val) {
  if (val >= 20) {
    console.log("20 or Over"); // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    console.log("10 or Over"); // Change this line
    return "10 or Over";
  }
  console.log("Less than 10");
  return "Less than 10";
}
console.log(testGreaterOrEqual(200));
