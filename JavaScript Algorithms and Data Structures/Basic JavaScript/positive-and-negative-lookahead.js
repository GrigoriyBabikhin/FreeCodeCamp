let sampleWord = "8pass99";
let pwRegex = /(?=\D)(?=\D*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result)