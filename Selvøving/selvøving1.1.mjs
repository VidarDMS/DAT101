"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1,");
/* Hilsen med navn: Lag en variabel name med ditt eget navn, og skriv deretter ut Hello, <name>! til konsollen.!*/

let name = "Vidar";
printOut("Hello " + name);

printOut(newLine);

printOut("--- Part 2,");
/* Enkel summering: Lag to variabler, x med verdien 5 og y med verdien 7. Skriv ut summen av disse to variablene.*/

let x = 5;
let y = 7;
printOut(x+y);

printOut(newLine);

printOut("--- Part 3,");
/* Alder: Lag en variabel age med din alder, og skriv ut I am <age> years old.*/

let age = 45;
printOut("I am " + age + " old.")
printOut(newLine);

printOut("--- Part 4,");
/* Tekstlengde: Lag en variabel med en valgfri tekststreng (f.eks., "JavaScript"), og skriv ut hvor mange tegn denne tekststrengen inneholder.*/

let wordlenght = "Javascript";
printOut(wordlenght.length);

printOut(newLine);

printOut("--- Part 5,");
/* Første bokstav: Lag en variabel med en tekststreng, og skriv ut den første bokstaven i strengen*/

let firstLetter = "javascript";
printOut(firstLetter.charAt(0));
printOut(newLine);

printOut("--- Part 6,");
/* Størrelse: Lag en variabel number. Hvis number er større enn 10, skriv "Big". Ellers skriv "Small".*/

let number = 9;
if(number > 10) {
  printOut("Big");
} else {
  printOut("Small");
}
printOut(newLine);

printOut("--- Part 7,");
/*  Temperatur: Lag en variabel temperature. Hvis den er under 0, skriv "Freezing". Ellers skriv "Not freezing".*/

let temprature = 2;
if(temprature < 0) {
  printOut("Freezing");
} else {
  printOut("Not Freezing");
}
printOut(newLine);

printOut("--- Part 8,");
/* oksen/Barn: Lag en variabel age. Hvis den er 18 eller mer, skriv "Adult". Ellers skriv "Child".*/

let age1 = 17;
if(age1 >= 18) {
  printOut("Adult");
  } else {
    printOut("Child");
  }

printOut(newLine);

printOut("--- Part 9,");
/* Passord: Lag en variabel password. Hvis den er nøyaktig lik "secret", skriv "Access granted". Ellers skriv "Wrong password".*/

let password = "abc";
if(password == "abc") {
  printOut("Access granted");
} else {
  printOut("Wrong Password");
}
printOut(newLine);

printOut("--- Part 10,");
/* Bestått/Ikke bestått: Lag en variabel score. Hvis den er minst 50, skriv "Pass". Hvis ikke, skriv "Fail".*/

let score = 49;
if(score >= 50) {
  printOut("Pass");
} else {
  printOut("Fail");
}
printOut(newLine);

printOut("--- Part 11,");
/* Trafikklys: Lag en variabel color. Hvis den er "red", skriv "Stop". Hvis "green", skriv "Go". Hvis "yellow", skriv "Wait".*/

let color = "Green";
if(color == "Red") {
  printOut("Stop");
} else if (color == "Yellow") {
  printOut("Wait");
} else {
  printOut("Go")
}
printOut(newLine);

printOut("--- Part 12,");
/* Tid på dagen: Lag en variabel hour (bruk et tall mellom 0 og 23). Hvis hour er mindre enn 12, skriv "Good morning". 
Hvis hour er mindre enn 18, skriv "Good afternoon". Ellers skriv "Good evening".*/

let randomnumber = Math.floor(Math.random() * 23 + 1 );
if (randomnumber < 12) {
  printOut("Good morning");
} else if ( randomnumber < 18) {
  printOut("Good afternoon");
} else {
  printOut("Good evning");
}

printOut(newLine);

printOut("--- Part 13,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 14,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 15,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 16,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 17,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 18,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 19,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 20,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 21,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 22,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 23,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 24,");
/* Put your code below here!*/
printOut(newLine);

printOut("--- Part 25,");
/* Put your code below here!*/
printOut(newLine);