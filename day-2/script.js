// Example
// Guess the number
function partOneA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer
  if (guessNumber === answer) {
    // 2. if it is, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  } else {
    // 3. if not, set the message for wrong guess.
    messageParagraph.innerHTML = `You did not guess the number. Try again.`;
  }
}

// Try It!
// Try it with a different number
function partOneB () {
  alert("Try it!");
  let answer, guess, guessNumber;
  answer = 3;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer
  if (guessNumber === answer){
   
   // 2. if it is, set the message for correct.

       messageParagraph.innerHTML = `You've guessed the number!${answer} You are Right!!!`;
    // 3. if not, set the message for wrong guess.
  } else {messageParagraph.innerHTML = `You've guessed incorrectly...The answer, is not ${answer}!`;
}
}
// Example
// guess the number with a hint of higher or lower
function partTwoA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if (guessNumber < answer) {
    // 2. if it is, set the message for too low.
    messageParagraph.innerHTML = `Your guess is too low. Try again.`;
  } else if (guessNumber > answer) {
    // 3. if not, set the message for too high.
    messageParagraph.innerHTML = `Your guess is too high. Try again.`;
  } else {
    // 4. if not, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  }

}

// Try it!
function partTwoB () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if (guessNumber > answer){

    // 2. if it is, set the message for too low.
     messageParagraph.innerHTML = `I'm said to say, that your guess ${guess}is too low...`;
  
    // 3. if not, set the message for too high.
  } else if (guessNumber < answer){
     
  
    // 4. if not, set the message for correct.
   }  else {
      messageParagraph.innerHTML = `${answer} is the correct anwser!!!`;
}
}  

// Example
// Mood checker
function partThreeA () {
  let color;
  color = prompt("What color describes your mood today?");
  // 1. check if the color is blue
  if(color === "blue") {
    // 2. give the message for blue
    messageParagraph.innerHTML = `Are you feeling down?`;
  // 3. check for the next color
  } else if(color === "yellow") {
    // 4. give the message for yellow
    messageParagraph.innerHTML = `You must being have a good day!`;
  }
}
  function partThreeB(){
    // Try it!
    // Try with some other colors.
    // For ideas check https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/
    // 5. otherwise, ask for another color
   // messageParagraph.innerHTML = `Try another color.`;

  let color;

  color = prompt("Type in your favorit color and I will tell you it's meaning!")
         if (color === "black") {
                     messageParagraph.innerHTML = `Black is the color of protection, power, elegance, and sophistication.`;
  } else if (color === "red") {
                     messageParagraph.innerHTML =`Red is the color of action, strength, energy, and passion.`;
  } else if (color === "orange") {
                     messageParagraph.innerHTML =`Orange is the color of emotion, youth, optimism, and enthusiasm.`;
  } else if (color === "green") {
                     messageParagraph.innerHTML =`Green is the color of harmony, safety, growth, and health.`;
  } else if (color === "purple") {
                     messageParagraph.innerHTML =`Purple is the color of spirituality, mystery, royalty, and imagination.`;
  } else if (color === "pink") {
                     messageParagraph.innerHTML =`Pink is the color of compassion, love, femininity, and playfulness.`;
  } else if (color === "white") {
                     messageParagraph.innerHTML =`White is the color of cleanliness, purity, innocence, and perfection.`;
  } else if (color === "grey") {
                     messageParagraph.innerHTML =`Gray: Represents neutrality, balance, and practicality. It’s a color of compromise and stability`;
  } else if (color === "indigo") {
                     messageParagraph.innerHTML =`Indigo: Symbolizes intuition, wisdom, and inner knowing. It’s associated with the third eye chakra`;
  } else if (color === "brown") {
                     messageParagraph.innerHTML =`Brown: Symbolizes earthiness, stability, and reliability. It’s connected to nature and the physical world.`;
  } else if (color === "silver") {
                     messageParagraph.innerHTML =`Silver: Signifies intuition, reflection, and emotional balance. It’s often linked to the moon and feminine energy`;
  } else if (color === "turquoise") {
                     messageParagraph.innerHTML =`Turquoise: Represents healing, communication, and protection. It’s a color of spiritual growth`;
  } else if (color === "yellow") {
    messageParagraph.innerHTML =`Yellow is the color of happiness, optimism, positivity, and intellect.`;
} else if (color === "blue") {
  messageParagraph.innerHTML =`Blue is the color of security, trust, loyalty, and responsibility.`;
}

  }






// Example
// Rock Paper Scissors
//function partFourA () {
 // let playerOne, playerTwo;
 // playerOne = prompt("Player One, choose rock, paper, or scissors.");
 // playerTwo = prompt("Player Two, choose rock, paper, or scissors.");
 // if(playerOne === "rock" && playerTwo === "paper"){
   // messageParagraph.innerHTML = "Player Two wins!";
 // } else if (playerOne === "scissors" && playerTwo === "rock") {
  //  messageParagraph.innerHTML = "Player Two wins!";
 // }// else {
   // messageParagraph.innerHTML = "It's a tie!";

  // NOTE: This is not a complete game. You need to figure out all the possible outcomes for it to work properly.
//}

// Try it!
// Can you implement Rock Paper Scissors?
// How many options are there?
// NOTE: If you miss some of the options, that's OK. 
// Try to catch as many as you can.
function partFourB (){
  alert("Try it!");
   let playerOne, playerTwo;
   playerOne = prompt("Player One, choose either rock, paper, or scissors.");
   playerTwo = prompt("Player Two, choose  either rock, paper, or scissors.");
                      //The Tie
                 if  (playerOne === playerTwo){
                      messageParagraph.innerHTML = `It's a Tie!!!`;
           // }else if (playerOne === "rock" && playerTwo == "rock"){
           //           messageParagraph.innerHTML = `it's a Tie!!!`;
           // }else if (playerOne === "scissors" && playerTwo === "scissors"){
                      messageParagraph.innerHTML = `it's a Tie!!!`; 
                      //Paper v.s Pock      
            }else if (playerOne === "paper" && playerTwo === "rock"){
                      messageParagraph.innerHTML = `Player One Wins!!!`;
             
            }else if (playerOne === "rock" && playerTwo === "paper"){
                      messageParagraph.innerHTML = `Player Two Wins!!!`;
                     //Rock v.s Scissors
            }else if (playerOne === "scissors" && playerTwo === "rock"){
                      messageParagraph.innerHTML = `Player Two Wins!!!`;
                    
            }else if (playerOne === "rock" && playerTwo === "scissors"){
                      messageParagraph.innerHTML = `Player One Wins!!!`;
                    //Scissors v.s Paper
            }else if (playerOne === "scissors" && playerTwo === "paper"){
                      messageParagraph.innerHTML = `Player One Wins!!!`;
                  
            }else if (playerOne === "paper" && playerTwo === "scissors") {
                      messageParagraph.innerHTML = `Player Two Wins!!!`;
                    
            }
            }
    
      