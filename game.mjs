//#region 
import * as readlinePromises from 'node:readline/promises';
import fs, { stat } from "node:fs"
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion

import { HANGMAN_UI } from './graphics.mjs';
import { GREEN, RED, WHITE, YELLOW, RESET } from './colors.mjs';
import dictionary from './dictionary.mjs';
import { SPLASH } from './splashscreen.js';
import { start } from 'node:repl';

console.clear();

async function splashScreen() {
    print(SPLASH, YELLOW)
    return new Promise((resolve) => setTimeout(resolve, 3000));

}

await splashScreen(); 

console.clear();

async function askToStart() {
    let startChoice = null;

    while (startChoice !== 'y' && startChoice !== 'n') {
        console.log("○◜▏Vil du spille Hangman? (y/n)"); 
        startChoice = (await (rl.question(""))).toLowerCase();
        
        if (startChoice == 'y') {
            await startGame();
        } else if (startChoice == 'n') {
            console.log("Ok, Farvel.");
            process.exit();
        } else {
            console.log("Skriv (y) for ja eller (n) for å avslutte");
            console.clear();
            
            
        }
    }
}



const word = getRandomWord();
let guessedWord = createGuessList(word.length);
let wrongGuesses = [];
let isGameOver = false;

async function startGame() { 
do {

    updateUI();

    // Gjette en bokstav || ord.  (|| betyr eller).
    let guess = (await rl.question(dictionary.guessPrompt)).toLowerCase(); 

    if (isWordGuessed(word, guess)) {
        print(dictionary.winCelibration, GREEN);
        isGameOver = true;
    }
    else if (word.includes(guess)) {

        uppdateGuessedWord(guess);

        if (isWordGuessed(word, guessedWord)) {
            print("Hurra du gjettet ordet", GREEN);
            isGameOver = true;
        }
    } else {
        print(" DU TAR FEIL !!!!!!!", RED);
        wrongGuesses.push(guess);

        if (wrongGuesses.length >= HANGMAN_UI.length - 1) {
            isGameOver = true;
            print("Du har daua", RED);
        }

    }

    // Har du lyst å spille igjen?
   

} while (isGameOver == false);


process.exit();

}


function uppdateGuessedWord(guess) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
            guessedWord[i] = guess;
            // Banana og vi tipper a.
            // _ -> a
        }
    }
}

function createGuessList(length) {
    let output = [];
    for (let i = 0; i < length; i++) {
        output[i] = "_";
    }
    return output;
}

function isWordGuessed(correct, guess) {
    for (let i = 0; i < correct.length; i++) {
        if (correct[i] != guess[i]) {
            return false;
        }
    }

    return true;
}

function print(msg, color = WHITE) {
    console.log(color, msg, RESET);
}

function updateUI() {

    console.clear();
    print(guessedWord.join(""), GREEN);
    print(HANGMAN_UI[wrongGuesses.length]);
    if (wrongGuesses.length > 0) {
        print(dictionary.wrongGuesses + RED + wrongGuesses.join() + RESET);
    }
}

function getRandomWord() {

    const words = ["Kiwi", "Car", "Dog", "etwas"];
    let index = Math.floor(Math.random() * words.length - 1);
    return words[index].toLowerCase();

}

await askToStart();
