# Hangman Project

## What is this project?

The Hangman is the classic word game, where the computer picks a word or phrase, and the player must guess what the word or phrase is, letter-by-letter. If the Player makes too many guesses, the hangman is "hung" and the player will lose.
If you are not familiar with the game, you can watch [this video](https://www.youtube.com/watch?v=j-pBzBvJVKc) and [play the game here](https://hangmanwordgame.com/?fca=1&success=0#/).

## How can I install the game?

1. Fork the AlbanyCanCode's HangmanProject repository, clone your forked repository, and open it in Visual Studio Code (or you preferred editor).

2. In the Visual Studio Code's terminal, type: `npm init`.

3. The `npm init -y` command generates _the package.json_ file. Open it and add `"type": "module"`. Here is a sample of what _package.json_ should look like:

```
#{
  "name": "hangman-project",
  "version": "1.0.0",
  "engine": {
    "node": "^20.11" // Optional
  },
  "type": "module",
  "main": "index.js",
  "author": "<YOUR NAME>", // Optional
  "repository": {
    "type": "git", // Optional
    "url": "git+https://github.com/<YOUR USERNAME>/HangmanProject.git" // Optional
  }
}
```

4. For this project, you will need to be able to read command line input. I suggest that you use [the readline-sync library](https://github.com/anseki/readline-sync), which you can install by running this in your terminal: `npm install --save readline-sync`.

5. Open the _fileindex.js._ This is the main file for the project. The first two lines should look like this:

`import prompt from "readline-sync";`
`import wordBank from "./word-bank.js";`

6. Create a file called _.gitignore_ inside of the root of your project. You should ignore the `node_modules` folder like this: `node_modules/`.

## How do I play the game?

In Visual Studio Code, open your terminal.
To start the game, run `node .`
To end the game, press `ctrl + c`.
The player will guess a letter over the command line. The player will type a single letter and hit `enter`.
The game will stop when either a.) the player has guessed all the letters or b.) the player has made six incorrect guesses.
