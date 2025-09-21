"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const mathResult = (2 + 3 * (2 - 4) * 6);
printOut(mathResult);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const inch = 25.4;
const metersToMillimeters = ((25 * 1000) + 340);
const metersToInches = metersToMillimeters / inch;
const AnswerToNumberOfInches = metersToInches.toFixed(2);
printOut(AnswerToNumberOfInches);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// 3 dager 12 timer 14 minutter og 45 sekunder til minutter.
const numberOfDaysToMinuttes = ((24*60)*3); // antall minutter er 4320 minutter
const numberOfHourstoMinutes = (12*60); // antall minutter er 720 minutter
const numberOfMinutesToMinutes = 14;
const numberOfSecondsToMinutes = (45/60); //0.75 minutter
const numberOfMinutesInTotal = (numberOfDaysToMinuttes + numberOfHourstoMinutes + numberOfMinutesToMinutes + numberOfSecondsToMinutes);
printOut(numberOfMinutesInTotal);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
6.322.52 til dager,timer,minutter og sekunder*/
const totalNumbersOfMinutes = 6322.52
const totalDays = Math.floor(totalNumbersOfMinutes / 1440);
const totalHours = Math.floor((totalNumbersOfMinutes % 1440) / 60);
const totalMinutes = Math.floor(totalNumbersOfMinutes % 60);
const totalSeconds = Math.floor((totalNumbersOfMinutes % 1) * 60);
printOut(totalDays + "dager" + totalHours + "timer" + totalMinutes + "minutter" + totalSeconds + "sekunder");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const oneUsdToNok = Number((76/8.6).toFixed(2)); // 8.84 nok er 1 dollar
const usd = Number(54 * oneUsdToNok);
const nok = Number(usd / oneUsdToNok);
printOut(nok);
printOut(usd);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Denne oppgaven var plutselig på nork. Vet ikke om det var meningen, men du får svarene i en norsk engelsk miks*/
const sentence = "Det er mye mellom himmel og jord som vi ikke forstår."
const numberofCharacters = (sentence.length)
const characterPosision = (sentence.charAt("19"));
const characterStartToEnd = (sentence.substring(35, 42))
const characterWord = (sentence.indexOf ("jord"))
printOut(numberofCharacters);
printOut(characterPosision);
printOut(characterStartToEnd);
printOut(characterWord);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const solutions= (5 > 3);
const solutionsTwo = (7>= 7);
const solutionsThree = ("a" > "b");
const solutionsFour = (1 < "a");
const solutionFive = ("2500" < "abcd");
const solutionSix = ("arne" !== "thomas");
const solutionSeven = (2 === 5);
const solutionEight = ("abcd" > "bcd");
printOut(solutions);
printOut(solutionsTwo);
printOut(solutionsThree);
printOut(solutionsFour);
printOut(solutionFive);
printOut(solutionSix);
printOut(solutionSeven);
printOut(solutionEight);
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let tekst1 = "254";
const number1 = parseInt(tekst1);
let tekst2 = "57.23";
const number2 = parseFloat(tekst2);
let tekst3 = "25 kroner";
const number3 = parseFloat(tekst3);
printOut(number1);
printOut(number2);
printOut(number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360 +1 );
printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days= 131;
const weeks = Math.floor(days/7);
const days2 = (days%7);
printOut(days + " dager er " + weeks + " uker " + days2 + " uker");
printOut(newLine);