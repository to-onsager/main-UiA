//#region 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion

import { print } from './lib/output.mjs';
import { ANSI } from './lib/ansi.mjs';
import { getRandomItemFromArray } from './lib/random.mjs';
import GAME_DICTIONARY from './dictionary.mjs';
import { TITLEART } from './titleart.mjs';
import { SPLASH } from './splashscreen.mjs';
import { start } from 'node:repl';
import { resolve } from 'node:path';

const CHOICES = { rock: 1, paper: 2, scissors: 3 };
const LIST_OF_CHOICES = [CHOICES.rock, CHOICES.paper, CHOICES.scissors];

async function splashScreen() {
    print(ANSI.CLEAR_SCREEN);
    print(SPLASH, ANSI.COLOR.GREEN);
    return new Promise((resolve) => setTimeout(resolve, 2000)); 

}

       

await splashScreen();

print(ANSI.CLEAR_SCREEN);

async function askToStart() {
    let startChoice = null;

    print(TITLEART, ANSI.COLOR.YELLOW);
    print(GAME_DICTIONARY.title, ANSI.COLOR.GREEN);

    while (startChoice !== 'y', startChoice !== 'n') {
        print(GAME_DICTIONARY.promptGameStart); 
        startChoice = ((await rl.question("")).toLowerCase)();
        
        if (startChoice === 'y') {
            await startGame();
        } else if (startChoice === 'n') {
            print(GAME_DICTIONARY.noToStart);
            process.exit();
        } else {
            print(ANSI.CLEAR_SCREEN);
            print(GAME_DICTIONARY.wrongInput);
        }
    }
}

async function startGame() {
    print(ANSI.CLEAR_SCREEN);
    print(GAME_DICTIONARY.yesToStart, ANSI.COLOR.GREEN);
    

    let player = await askForPlayerChoice();
    let npc = makeAIChoice();

print(`${GAME_DICTIONARY.youPicked} ${getDesc(player)} ${GAME_DICTIONARY.aiPicked} ${getDesc(npc)}`);
print(GAME_DICTIONARY.winner + evaluateWinner(player, npc));
process.exit();

}

async function promptStart() {
    await askToStart();

}


promptStart();

// ---- Game functions etc..

function evaluateWinner(p1Ch, p2Ch) {
    // Vi går ut i fra at spiller 2 vinner :)
    let result = GAME_DICTIONARY.player2;

    // Men vi må sjekke om noe annet skjedde.
    if (p1Ch == p2Ch) {
        result = GAME_DICTIONARY.draw;
    } else if (p1Ch == CHOICES.rock) {
        if (p2Ch == CHOICES.scissors) {
            result = GAME_DICTIONARY.player1;
        }
    } else if (p1Ch == CHOICES.paper) {
        if (p2Ch == CHOICES.rock) {
            result = GAME_DICTIONARY.player1;
        }
    } else if (p1Ch == CHOICES.scissors) {
        if (p2Ch == CHOICES.paper) {
            result = GAME_DICTIONARY.player1;
        }
    }

    return result;
    
}

function makeAIChoice() {
    return getRandomItemFromArray(LIST_OF_CHOICES);
}

function getDesc(choice) {
    return GAME_DICTIONARY.choices[choice - 1];
}

async function askForPlayerChoice() {
    let choice = null;

    do {
        print(GAME_DICTIONARY.selectionQuestion);
        let rawChoice = await rl.question("");
        rawChoice = rawChoice.toUpperCase();
        choice = evaluatePlayerChoice(rawChoice);
    } while (choice == null);

    return choice;
    
}

function evaluatePlayerChoice(rawChoice) {
    let choice = null;

    if (rawChoice == GAME_DICTIONARY.rock) {
        choice = CHOICES.rock;
    } else if (rawChoice == GAME_DICTIONARY.paper) {
        choice = CHOICES.paper;
    } else if (rawChoice == GAME_DICTIONARY.scissors) {
        choice = CHOICES.scissors;
    }
    return choice;
    
}


