"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1,");
/* Hilsen med navn: Lag en variabel name med ditt eget navn, og skriv deretter ut Hello, <name>! til konsollen.!*/

let navn = "Vidar Strandås";
printOut("Hello " + navn);

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
printOut("I am " + 45 + " years old")

printOut(newLine);

printOut("--- Part 4,");
/* Tekstlengde: Lag en variabel med en valgfri tekststreng (f.eks., "JavaScript"), og skriv ut hvor mange tegn denne tekststrengen inneholder.*/

let string = "JavaScript";
printOut(string.length);


printOut(newLine);

printOut("--- Part 5,");
/* Første bokstav: Lag en variabel med en tekststreng, og skriv ut den første bokstaven i strengen*/
let string1 = "Javascript";
printOut(string1.charAt(0));

printOut(newLine);

printOut("--- Part 6,");
/* Størrelse: Lag en variabel number. Hvis number er større enn 10, skriv "Big". Ellers skriv "Small".*/
let number = 4;
if (number > 10) {
  printOut("Big.");
} else {
  printOut("Small.");
}


printOut(newLine);

printOut("--- Part 7,");
/*  Temperatur: Lag en variabel temperature. Hvis den er under 0, skriv "Freezing". Ellers skriv "Not freezing".*/

let temperature = 1;
if (temperature < 0) {
  printOut("Not frezzing.");
} else {
  printOut("Frezzing.");
}


printOut(newLine);

printOut("--- Part 8,");
/* Voksen/Barn: Lag en variabel age. Hvis den er 18 eller mer, skriv "Adult". Ellers skriv "Child".*/

let child = 18;
if (child >= 18) {
  printOut("Adult.")
} else {
  printOut("child.")
}

  

printOut(newLine);

printOut("--- Part 9,");
/* Passord: Lag en variabel password. Hvis den er nøyaktig lik "secret", skriv "Access granted". Ellers skriv "Wrong password".*/

let password = 124;
if (password == 123) {
  printOut("Secret.");
} else {
  printOut("Wrong Password.");
}

printOut(newLine);

printOut("--- Part 10,");
/* Bestått/Ikke bestått: Lag en variabel score. Hvis den er minst 50, skriv "Pass". Hvis ikke, skriv "Fail".*/

let score = 49;
if (score >= 50) {
  printOut("Pass.");
} else {
  printOut("Fail");
}

printOut(newLine);

printOut("--- Part 11,");
/* Trafikklys: Lag en variabel color. Hvis den er "red", skriv "Stop". Hvis "green", skriv "Go". Hvis "yellow", skriv "Wait".*/

let color = "Yellow";
if (color == "red") {
  printOut("Stop")
} else if (color == "Green") {
  printOut("Go");
} else {
  printOut("Wait");
}

printOut(newLine);

printOut("--- Part 12,");
/* Tid på dagen: Lag en variabel hour (bruk et tall mellom 0 og 23). Hvis hour er mindre enn 12, skriv "Good morning". 
Hvis hour er mindre enn 18, skriv "Good afternoon". Ellers skriv "Good evening".*/

let hour = 11;
if (hour < 12) {
  printOut("Good morning");
} else if (hour < 18) {
  printOut("Good afternoon");
} else {
  printOut("Good evening");
}


printOut(newLine);

printOut("--- Part 13,");
/* Teller opp: Bruk en for-løkke til å skrive tallene fra 1 til 5.*/

for (let i = 1; i <= 5; i++) {
  printOut(i);
}
 
printOut(newLine);

printOut("--- Part 14,");
/* Teller ned: Bruk en for-løkke til å skrive tallene fra 10 til 1 (baklengs).*/

for (let j = 10; j >= 1; j--) {
  printOut(j);
}
printOut(newLine);

printOut("--- Part 15,");
/* Nedtelling med melding: Bruk en while-løkke til å telle ned fra 3 til 1, og til slutt skriv "Liftoff!".*/
let k = 3;
while(k>=1) {
  printOut(k);
  k--;
} printOut("Liftoff");

printOut(newLine);

printOut("--- Part 16,");
/* Gjenta hilsen: Bruk en for-løkke til å skrive ut "Hello" fem ganger.*/
let hello = "hello"
for(let l = 5; l >= 0; l--) {
  l == hello;
  printOut(hello);
}
printOut(newLine);

printOut("--- Part 17,");
/* Partall: Bruk en for-løkke til å skrive ut alle partall fra 2 til 10 (f.eks. 2, 4, 6, 8, 10).*/

for(let m = 2; m <= 10; m+=2) {
  printOut(m);
}

printOut(newLine);

printOut("--- Part 18,");
/* Oddetall/Partall: Skriv en løkke som teller fra 1 til 10. For hvert tall, 
skriv "Even" hvis tallet er et partall, ellers skriv "Odd". */
for(let odd = 1, even = 2; odd <= 10, even <=10; odd+=2, even+=2) {
  
  printOut(odd + " odd");
  printOut(even + " even");
} 
  

printOut(newLine);

printOut("--- Part 19,");
/* Delelig med 3: Lag en løkke som teller fra 1 til 20, 
men som bare skriver ut tallene som er delelige på 3 (f.eks. 3, 6, 9...).*/

for ( let n = 20; n >=0; n--) {
  if (n % 3 === 0) {
    printOut(n);
  }
}
printOut(newLine);

printOut("--- Part 20,");
/* Antall delelige tall: Lag en løkke som teller fra 1 til 100
 og teller hvor mange av disse tallene som er delelige på 5. Til slutt skriver du ut det totale antallet.*/
let count = 0;
 for (let o = 500; o >=0; o--){
  if (o % 5 === 0) {
 printOut(o);
 count++
 }
 }
 printOut("antall treff " + count);
 

printOut("--- Part 21,");
/* Tilfeldig tall 1-10: Lag et tilfeldig heltall fra 1 til 10 og skriv det ut.*/

let random = Math.floor(Math.random() * 10) + 1;
printOut(random);

printOut(newLine);

printOut("--- Part 22,");
/* Terningkast: Lag en "terning" (et tilfeldig heltall fra 1 til 6). Skriv ut resultatet av terningkastet.*/

const diceAlt = Math.floor(Math.random() * 10 + 1);
printOut("The dice landed on number " + diceAlt);


printOut(newLine);

printOut("--- Part 23,");
/* Ti terningkast: Kast terningen (som i oppgave 22) 10 ganger i en løkke, og skriv ut hvert enkelt resultat.*/
  for( let p = 1; p <= 6; p++) {
  printOut(Math.floor(Math.random() * 6 + 1));  
  }

printOut(newLine);

printOut("--- Part 24,");
/* Navngitt hilsen-funksjon: Lag en funksjon kalt greet(name) som tar et navn som argument 
og skriver "Hello, <name>!". Kall deretter funksjonen med ditt eget navn.*/

function greet(name) {
  printOut("Hello" + name +  " !");
}
greet (" Vidar");

printOut(newLine);

printOut("--- Part 25,");
/* Kvadreringsfunksjon: Lag en funksjon kalt square(x) som returnerer tallet x ganget med seg selv (altså x i annen potens). 
Test funksjonen ved å kalle den med 3 og 5, og skriv ut resultatene*/
function square(x) {
  return x * x;
}

printOut(square(3));
printOut(square(5));     


printOut(newLine);