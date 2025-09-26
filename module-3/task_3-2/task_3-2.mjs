"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txt = "";
let txt2 = "";
for(let i = 1, j = 10; i <=10; i++, j--) {
    txt += " " + i.toString();
    txt2 += " " + j.toString();
} printOut(txt);
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
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200*/


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
