import wordBank from "./word-bank.js";
import prompt from "readline-sync";

console.log(wordBank[0]);

const answer = prompt.question("Does this work? ");
console.log(answer);
