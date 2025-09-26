"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let counting = 1
for(counting = 1; counting <= 10; counting++) {
    printOut(counting);
} for(counting = 10; counting >= 1; counting--) {
    printOut(counting); //Jeg får ikke til å få de på linje. Må få bistand til dette.
}    
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

let number2 = 45;
let timeStarted = Date.now();
let winningNumber2 = Math.floor(Math.random() * 1000000 + 1);
let attempts = 1;

while (winningNumber2 !== number2) {
    winningNumber2 = Math.floor(Math.random() * 1000000 + 1);
    attempts++;
}

let timeStopped = Date.now();
let elapsed = timeStopped - timeStarted;

printOut("You win! The number was " + winningNumber2);
printOut("Attempts: " + attempts);
printOut("Time (ms): " + elapsed);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for ( let primeNumber = 2; primeNumber <=200; primeNumber++) {
    while primeNumber =%
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
