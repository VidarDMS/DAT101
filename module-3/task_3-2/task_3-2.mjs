"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txt = "";
let txt2 = "";

for(let i = 1, j = 10; i <=10; i++, j--) {
    txt += " " + i.toString();
    txt2 += " " + j.toString();
} 

printOut(txt);
printOut(txt2);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 45;
let winningNumber = Math.floor(Math.random() * 60 + 1);

while (winningNumber !== number) {
winningNumber = Math.floor(Math.random() * 60 + 1);
}

printOut("You win! The number was " + winningNumber);


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Time = Date.now();
const part3GuessNumber = 353555
let part3Random;
let part3Count = 0;
do{
    part3Random = Math.floor( Math.random() * 1000000 + 1);
    part3Count++;
}while( part3Random !== part3GuessNumber );

printOut(" Number guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time;
printOut("Number of mSec: " + part3DeltaTime);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200*/
let txtprimes = "";

for(let i = 1; i <200; i++) {
    let j = i - 1;
    let isPrime = true;
    while(j > 1 && isPrime) {
        let rest = i % j;
        isPrime = rest != 0;
        j--;
    }
    if(isPrime) {
    txtprimes += " " + i;
    }
    } 

printOut(txtprimes);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const printcolumns = 7;
const printrows = 9;
let txt3 = "";
for (let i=1; i <= printcolumns; i++) {
 for (let j=1; j <= printrows; j++) {
    txt3 += " " + " K" + j.toString() + "R" + i.toString();

}
txt3+="<br>";
} printOut(txt3);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for ( let i = 1; i <= 5; i++) {
        const number6 = Math.floor(Math.random() * 236 + 1); 
        const percent = (number6 / 236 * 100);

if(percent <= 40) {
    printOut("Grade F");
} else if (percent <= 52) {
    printOut("Grade E");
} else if (percent <= 64){
    printOut("Grade D");
} else if (percent <= 76){
    printOut("Grade C");
} else if (percent <= 88) {
    printOut("Grade B");
} else {
    printOut("Grade A");
}
} 



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function diceroll() {
    return Math.floor(Math.random() * 6 + 1);
}

function rollSixDices() {
    let dice = [];
    for (i = 0; i < 6; i++) {
        dice.push(diceroll());
    }
    return dice;
}
    function countDice() {
    let diceCounter = [0, 0, 0, 0, 0, 0,];
    let dice = rollSixDices();
    for (let i = 0; i < 6; i++) {
        diceCounter[dice[i] - 1]++;
     } 
     return (diceCounter);    
    }

    function twoKind() {
        let twoOfAKind = false;
        for( let i = 0; i < diceCounter.length; i++) {
            if(diceCounter[i] === 2) {
                twoOfAKind = true;
            } 
        } return twoOfAKind;
}

function fourKind() {
        let fourOfAKind = false;
        for( let i = 0; i < diceCounter.length; i++) {
            if(diceCounter[i] === 4) {
                fourOfAKind = true;
            } 
        } return fourOfAKind;
}

function sixKind() {
        let sixOfAKind = false;
        for( let i = 0; i < diceCounter.length; i++) {
            if(diceCounter[i] === 6) {
                sixOfAKind = true;
            } 
        } return sixOfAKind;
}




