//#region 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion
 
import { CONTENT_TABLE } from './tablecontent.mjs';
import { getRandomItemFromArray } from './lib/random.mjs';


const CHOICES = ["Stein", "Papir", "Saks"]
const LIST_OF_CHOICES = [CHOICES.rock, CHOICES.paper, CHOICES.scissors];




function startGame() {
    console.log(CONTENT_TABLE.en.title);
    console.log(CONTENT_TABLE.en.promptGameStart + "  (Press ctrl + c to quit and at any time)");
    
rl.on('line', () => {
    console.log(CONTENT_TABLE.en.gameAccept); 
    playRound(); // Start spill
    });

};



function playRound () {
    rl.question(CONTENT_TABLE.en.promptQuestion)
    const validChoices = (CONTENT_TABLE.en.rock, CONTENT_TABLE.en.paper, CONTENT_TABLE.en.scissor);

}



startGame();


function playAgain() {
rl.question('play again?')
if (response == "") {
    playRound ();

}
else { 
    console.log('See you.');
    rl.close();
    process.exit();
}

};
