import wordBank from "./word-bank.js";
import prompt from "readline-sync";

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex]; //  select a random word from the word bank.
};

const checkGuess = (randomWord, guessedLetter) => {
  randomWord = randomWord.toLowerCase();
  guessedLetter = guessedLetter.toLowerCase();
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
      display += letter;
    } else {
      display += "_";
    }
    display += " "; // Add space between letters for better readability
  }
  return display.trim(); // Remove extra space at the end
};

const updateGuesses = (maxGuesses, guessesTaken) => {
  return maxGuesses - guessesTaken;
};

const startGame = () => {
  const maxGuesses = 6;
  let guessesTaken = 0;
  const randomWord = getRandomWord();
  const wordLength = randomWord.length;
  let guessedLetters = [];

  const initialDisplay = initializeDisplay(wordLength);
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  while (guessesTaken < maxGuesses) {
    const remainingGuesses = updateGuesses(maxGuesses, guessesTaken);
    console.log(`Remaining guesses:${remainingGuesses}`);
    const letter = prompt.question("Please guess a letter: ");
    const result = checkGuess(randomWord, letter);
    guessedLetters.push(letter);
    console.log(updateDisplay(randomWord, guessedLetters));
    console.log(result);
    guessesTaken++;
  }
  if (guessesTaken >= maxGuesses) {
    console.log(`Game over! The word was ${randomWord}`);
  }
};
startGame();
