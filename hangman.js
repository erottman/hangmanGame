$("document").ready(function() {



var words = ["guvy", "zilla", "virgil", "erica", "nose"];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
}

console.log(answerArray);


var remainingLetters = word.length;
console.log(remainingLetters);

var remainingGuesses = 10;

// The game loop

while (remainingLetters > 0 && remainingGuesses > 0) {
    // show the player their progress
    alert(answerArray.join(" "));

    // Show the player their progress
    var guess = prompt("Guess a letter or click Cancel to stop playing.");
    var guessLower = guess.toLowerCase();
    remainingGuesses--;

     if (guessLower === null) {
        // exit the game
        break;
    } else if (guessLower.length !== 1) {
        alert("Please enter a single letter");
    } else {
        // update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guessLower) {
                answerArray[j] = guessLower;
                remainingLetters--;

            }
        }
    }
    // The end of the game
}
// show the answer and congrat the player

if (remainingGuesses === 0) {
    alert("You Lose!!");
  }else {
alert(answerArray.join(""));
alert("Good job! The answer was " + word); }

});
