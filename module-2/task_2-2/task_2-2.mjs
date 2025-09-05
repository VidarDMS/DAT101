"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(2 + 3 * (2 -4) * 6);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25.34;
let answer = meter * 39.37;
printOut("25 meter og 34 cm er:" + (answer).toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const day = 3, hours = 12, min = 14, seconds = 45;
const totalMinute = (day * 24 * 60) + (hours * 60) + min + (seconds / 60);
printOut("Totale minutter: " + totalMinute);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalminutes = 6322.52;

let days1 = Math.floor(totalminutes / 1440);
let afterdays = totalminutes % 1440;

let hours1 = Math.floor(afterdays / 60);
let afterhours = afterdays % 60;

let minutes1 = Math.floor(afterhours);
printOut(totalminutes + " minutter " + days1 + " dager, " + hours1 + " timer og " + minutes1 + " minutter.");
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
const setning = "There is much between heaven and earth that we do not understand."
let antallTall = setning.length;
let ord19 = setning.charAt(19);
let mangeord = setning.substring(35,43); //usikkerpå om denne stemmer
let posisjon = setning.indexOf("earth");
printOut("antall tegn i setningen: " + antallTall);
printOut("bokstaven er: " + ord19);
printOut("bokstavene: " + mangeord);
printOut("posisjonen til ordet 'earth' er: " + posisjon);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let solution = (5 > 3);
let newSolution = solution.toString();
let solution2 = (7>= 7);
let newSolution2 = solution2.toString();
let solution3 = ("a" > "b");
let newSolution3 = solution3.toString();
let solution4 = (1 >"a");
let NewSolution4 = solution4.toString();
let solution5 = (2500 < "abcd");
let newSolution5 = solution5.toString();
let solution6 = ("arne" != "thomas");
let newSolution6 = solution6.toString();
let solution7 = (2 === 5);
let newSolution7 = solution7.toString();
let solution8 = ("abcd" > "bcd");
let newSolution8 = solution8.toString();
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
let number11= parseFloat(text)
let text2 = "57.23";
let number12 = parseFloat(text2);
let text3 = ("25");
let number13 = parseFloat(text3);
printOut(number11); 
printOut(number12);
printOut("kroner " + number13);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = (Math.floor)(Math.random() * 360 + 1);
printOut("Random tall mellom 1 og 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 131;
let weeks2 = Math.floor(totaldays / 7);
let days2 = (totaldays % 7);
printOut(totaldays + " dager er " + weeks2 + " uker og " + days2 + " dager.");
printOut(newLine);