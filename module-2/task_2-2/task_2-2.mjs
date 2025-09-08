"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("2 + 3 * (2 -4) * 6 = " + (2 + 3 * (2 -4) * 6));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 25.34;
const answer = meters * 39.37;
printOut("25 meters and 34 centimeter = " + (answer).toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const day = 3, hours = 12, min = 14, seconds = 45;
const totalMinute = (day * 24 * 60) + (hours * 60) + min + (seconds / 60);
printOut("3 days, 12 hours, 14 minutes and 45 seconds is " + totalMinute + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Jeg vet dette ikke ser ideelt ut, men sånn fikk jeg oversikt, og så kan du se hvordan hodet mitt fungerer*/
const totalminutes = 6322.52;

const days1 = Math.floor(totalminutes / 1440);
const afterdays = totalminutes % 1440;

const hours1 = Math.floor(afterdays / 60);
const afterhours = afterdays % 60;

const minutes1 = Math.floor(afterhours);

const seconds1 = Math.floor((afterhours - minutes1) * 60 );

printOut(totalminutes + " minutes is " + days1 + " days, " + hours1 + " hours " + minutes1 + " minutes and "  + seconds1 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let valutakurs = 76/8.6;// = 8.837209302325581
let svar = 54 * valutakurs;
let svar2 = 477 / valutakurs;
printOut("54 USD = " + svar.toFixed(0) + " NOK");
printOut("477 NOK = " + svar2.toFixed(0) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Denne oppgaven var plutselig på nork. Vet ikke om det var meningen, men du får svarene i en norsk engelsk miks*/
const setning = "Det er mye mellom himmel og jord som vi ikke forstår."
let antallTall = setning.length;
let ord19 = setning.charAt(19);
let mangeord = setning.substring(35,43);
let posisjon = setning.indexOf("jord");
printOut("The text has " + antallTall + " characters");
printOut("The character at position 19 is: " + ord19);
printOut("The substring from 35 and 8 places is: " + mangeord);
printOut('The word "jord" starts at pos ' + posisjon);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let solution = (5 > 3);
let newSolution = "5 > 3 is " + solution.toString();

let solution2 = "7 >= 7 is " + (7>= 7);
let newSolution2 = solution2.toString();

let solution3 = ("a" > "b");
let newSolution3 = '"a" > "b" is ' + solution3.toString();

let solution4 = (1 >"a");
let NewSolution4 = '"1" > "a" is ' + solution4.toString();

let solution5 = ("2500" < "abcd");
let newSolution5 = '"2500" < "abcd" ' + solution5.toString(); // hvorfor blir ikke denne true

let solution6 = ("arne" !== "thomas");
let newSolution6 = '"arne" !== "thomas" ' + solution6.toString();

let solution7 = (2 === 5);
let newSolution7 = "(2 === 5) === true is " + solution7.toString();

let solution8 = ("abcd" > "bcd");
let newSolution8 = '("abcd" > "bcd") ' + solution8.toString() + " is true";
printOut(newSolution);
printOut(newSolution2);
printOut(newSolution3);
printOut(NewSolution4);
printOut(newSolution5);
printOut(newSolution6);
printOut(newSolution7);
printOut(newSolution8);
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "254";
let number11 = '"254" = ' + parseFloat(text)
let text2 = "57.23";
let number12 = '"57.23" = ' + parseFloat(text2);
let text3 = ("25");
let number13 = '" 25 kroner" = ' + parseFloat(text3);
printOut(number11); 
printOut(number12);
printOut("kroner " + number13);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = (Math.floor)(Math.random() * 360 + 1);
printOut("Random number between 1 og 360: " + r);
printOut("Math.ceil (Math.random() * 360) = 305") /*Dette er hva din print sa derfor la jeg den til.*/
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 131;
let weeks2 = Math.floor(totaldays / 7);
let days2 = (totaldays % 7);
printOut(totaldays + " days " + weeks2 + " weeks and " + days2 + " days.");
printOut(newLine);