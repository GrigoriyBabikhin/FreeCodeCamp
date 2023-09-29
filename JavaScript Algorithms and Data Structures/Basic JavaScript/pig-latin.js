function translatePigLatin(str) {
  let vowels = "aeiou".split("");

  for(let i = 0; i < str.length; i++){
    let indivrdualLetter = str[i];

    if(vowels.indexOf(indivrdualLetter) != -1 && i === 0){
      return str + "way";
    }
    if (vowels.indexOf(indivrdualLetter) != -1){
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  return str + "ay"; 
}

translatePigLatin("consonant");