import wordBank from "./word-bank.js";
import prompt from "readline-sync";

let wins = 0;
let losses = 0;
let guessedLetters = []; //an array storing all guessed letters.

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex]; //  select a random word from the word bank.
};

const checkGuess = (randomWord, guessedLetter) => {
  randomWord = randomWord.toLowerCase();
  guessedLetter = guessedLetter.toLowerCase();

  if (guessedLetters.includes(guessedLetter)) {
    return `You've already guessed "${guessedLetter}". Please try a different letter.`;
  }

  if (randomWord.includes(guessedLetter)) {
    return `The word includes this letter`;
  } else {
    return `The word does not include this letter. Please try again`;
  }
}; //  check if the guessed letter is in the word

const initializeDisplay = (wordLength) => {
  return "_".repeat(wordLength); // initializes the display that shows the progress of the game
};

const updateDisplay = (randomWord, guessedLetters) => {
  let display = "";
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      //iterating through each character of the randomWord
      display += letter;
    } else {
      display += "_";
    }
    display += " ";
  }
  return display.trim(); //trims any extra whitespace of the display string.
};

const updateGuesses = (maxGuesses, guessesTaken) => {
  return maxGuesses - guessesTaken; //updates the number of remaining guesses.
};
const playAgain = () => {
  const answer = prompt.question("Do you want to play again? (yes/no): ");
  return answer.toLowerCase() === "yes"; // checks if the user wants to play again
};

const startGame = () => {
  const maxGuesses = 6;
  let guessesTaken = 0;
  const randomWord = getRandomWord();
  const wordLength = randomWord.length;

  const initialDisplay = initializeDisplay(wordLength);
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  while (guessesTaken < maxGuesses) {
    const remainingGuesses = updateGuesses(maxGuesses, guessesTaken);
    console.log(`Remaining guesses: ${remainingGuesses}`);
    const letter = prompt.question("Please guess a letter: "); //the letter inputted by the player during each iteration of the game loop
    const result = checkGuess(randomWord, letter);
    guessedLetters.push(letter);
    console.log(updateDisplay(randomWord, guessedLetters));
    console.log(result);
    guessesTaken++;
  }
  let wordGuessed = true; // Check if word is guessed
  randomWord.split("").forEach((letter) => {
    //splitting the randomWord into an array of individual letters and iterating over each letter
    if (!guessedLetters.includes(letter)) {
      wordGuessed = false;
    }
  });

  if (wordGuessed) {
    console.log(`Congratulations! You've won! The word was "${randomWord}"`);
    wins++;
  } else {
    console.log(`Game over! The word was ${randomWord}`);
    losses++;
  }
  console.log(`Wins:${wins}, Losses:${losses}`);

  if (playAgain()) {
    startGame();
  } else {
    console.log("Thanks for playing");
  }
};

startGame();
