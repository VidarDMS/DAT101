"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

/*
function showDate() {
    let today = new Date();
    printOut(today.toLocaleDateString("no-NB"));
} showDate() */ 
 
// Har gjort det slik så jeg kan kode normalt videre uten å endre variablene hele tiden.

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!

Jeg har endret datoen i oppgaven til 2026. Er kjedelig å være så treg at det har nesten gått 6 måneder siden release og ikke oppdaget det enda :)*/

/*function showDate() {
    let today = new Date();
    printOut(today.toLocaleDateString("no-NB"));
    return today;
} 

function releaseDay() {
    let release = new Date("2026-05-14");
    let timeDifference = release.getTime() - showDate().getTime()
    let timeToRelease = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     
    printOut("Time left until release is in " + timeToRelease + " days.");
} 
releaseDay() */


function showDate() {
    let today = new Date();
    printOut(today.toLocaleDateString("no-NB"));
    return today;
} 

function releaseDay() {
    let release = new Date("2026-05-14");
    let timeDifference = release.getTime() - showDate().getTime()
    let timeToRelease = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     
    switch (true) {
        case (timeToRelease <= 0):
            printOut("It's gametime baby!!!!");
            break;
        
        case (timeToRelease <= 7):
            printOut("One week to go. Remeber to ask for time of work.");
            break;
        
        case (timeToRelease <= 30):
            printOut("Start preparing for the release.");
            break;

        case (timeToRelease <= 50):
            printOut("Comming to you soon. Watch our latest trailer");
            break;
            case (timeToRelease <= 250):
            printOut("Comming to you soonish");
            break;
    }
    printOut("Time left until release is in " + timeToRelease + " days.");
} 
releaseDay()

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
