$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var piglatin = pigvar(userInput);

    $('#output').text(piglatin);
  });


function pigvar(userText){
  var word = userText;
  var firstLetter = word[0];

  if (isVowel(firstLetter)) {
    return word + "way";
  } else {
    for (var letterPosition = 0; letterPosition < word.length; letterPosition++) {
    var currentLetter = word[letterPosition];
    return word.slice(letterPosition + 1, word.length) + word.slice(0, letterPosition + 1) +'ay';
    }
  }



function isVowel(letter) {
  var vowelArray = ['a' , 'e' , 'i' , 'o', 'u']
  return vowelArray.includes(letter.toLowerCase())
}
};
});
