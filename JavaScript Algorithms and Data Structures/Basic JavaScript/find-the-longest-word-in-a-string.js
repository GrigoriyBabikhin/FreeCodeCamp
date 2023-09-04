function findLongestWordLength(str) {
  let words = str.split(" ");
  let theLongestWord = "";
  
  for (let i = 0; i < words.length; i++){
    if (words[i].length > theLongestWord.length)
      theLongestWord = words[i] 
  } 
  return theLongestWord.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");