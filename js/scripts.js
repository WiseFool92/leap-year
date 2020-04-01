// Back End
// leap year
function evaluateYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `The year ${year} is a leap year`;
  } else {
    return `The year ${year} isn't a leap year`;
  }
}

// pig latin
function createPiglatin(phrase) {
  var phraseArray = phrase.split(" ");
  // console.log(phraseArray);
  for (let index = 0; index < phraseArray.length; index++) {
    var word = phraseArray[index];
    const notChar = word.match(/^[A-Za-z]+$/g);
    if (notChar === null) {
    } else if(word.length === 1) {    
      const notaVowel = word.match(/[aeiouAEIOU]/g)
      //console.log(notaVowel);
      if(notaVowel === null){ 
      } else{
        word += '-yay'
        phraseArray[index] = word 
      }
    } else {
      console.log(notChar);

      var letterArray = word.split("");
      for (let index = 0; index < letterArray.length; index++) {
        const letter = letterArray[index];

        //  console.log(letter);
      }
    }
  }

  return phraseArray;
}

//Front End
$(document).ready(function() {
  console.log("JavaScript is working");

  //on click function
  $("form").submit(function(event) {
    event.preventDefault();

    //leap year ui
    var year = $("#input-1").val();
    $(".output1").text(evaluateYear(year));

    // pig latin ui
    var phrase = $("#input-2").val();
    $(".output2").text(createPiglatin(phrase));
  });
});
