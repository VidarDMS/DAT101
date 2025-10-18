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
/*Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/

function circle() {
    let radius = 5;
    let diameter = (radius * 2);
    let circumference = Math.floor(radius * 2 * Math.PI)
    let area = Math.floor(Math.PI * (radius ** 2));
    printOut("radius = " + radius + " diameter = " + diameter + " circumference = " + circumference + " area = " + area + ".")
} 
circle()

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/

function rectangle() {
    let width = 10;
    let heigth = 10;
    let circumference4 = 2 * (width + heigth);
    let area4 = (width * heigth);
    printOut("circumference is " + circumference4 + " and area is " + area4 + ".");
}
rectangle();

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function temperature() {

       let randomTemperature = Math.floor(Math.random() * 71 - 30)
       let randomLetter = Math.floor(Math.random() * 3 +1) 

        if (randomLetter === 1) {
        printOut ("Celsius")   
            let fahrenheit = (randomTemperature * 1.8) + 32;
            let kelvin = randomTemperature + 273.15;
            printOut(randomTemperature + "°C = " + fahrenheit + "°F og " + kelvin + "K");
        }
        else if (randomLetter === 2) {
        printOut ("Farenheit")
            let celsius = (randomTemperature - 32) / 1.8;
            let kelvin = celsius + 273.15;
            printOut(randomTemperature + "°F = " + celsius + "°C og " + kelvin + "K");
    }
        else {
        printOut("Kelvin")
            let celsius = randomTemperature - 273.15;
            let fahrenheit = (celsius * 1.8) + 32;
            printOut(randomTemperature + "K = " + celsius + "°C og " + fahrenheit + "°F");
        }
       }
      temperature();

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function prices (vatIncluded, vatGroup) {

let vatRate;
if (vatGroup === "Normal") {
    vatRate = 25;
} else if (vatGroup === "Food") {
    vatRate = 15;
} else if (vatGroup === "Hotel") {
    vatRate = 10;
} else {
    printOut("Unknown VAT group");
    return;
}   

let noVat = (100 * vatIncluded) / (vatRate + 100);
printOut(vatIncluded + " is " + noVat.toFixed(2) + " without tax");

} 
prices(100, "Normal");
prices(200, "Food");
prices(300, "Hotel");
prices(400, "Wrong");
    



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function theFlash (speed, distance, time) {
    if (!speed && distance && time) {
       let speedMissing = (distance / time);
       printOut("Speed is " + speedMissing + " m/s"); 
    } else if (!distance && speed && time) {
        let distanceMissing = (speed * time);
        printOut("Distance is " + distanceMissing + " m");
    } else if (!time && distance && speed) {
        let timeMissing = (distance / speed);
        printOut("Time is " + timeMissing + " s");
    } else if ((!speed && !distance) || (!speed && !time) || (!distance && !time)) {
        printOut("NaN due to all parameteres where not met");
    } return ;
} 
theFlash(null, 200, 40);  
theFlash(100, null, 40); 
theFlash(100, 200, null);
theFlash(null, null, 50);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function padText(text, maxSize, fillChar, putBefore) {
    if (text.length < maxSize){
        let missing = maxSize - text.length;
        let fillIn = fillChar.repeat(missing); 
    if (putBefore) {
        text = fillIn + text;
    } else {
        text = text + fillIn;
    }
    
    } printOut(text);
}

padText ("This is a text", 25, "\xa0", true); // den printer feil i forhold til oppgaven. HJELP!!!!!

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

function testMaths() {
  let n = 1;
  let line = 1;

  while (n <= 63) {
    let leftCount = line + 1;
    let rightCount = line;

    let leftText = "";
    let rightText = "";

  
    for (let i = 0; i < leftCount && n <= 63; i++) {
      leftText = leftText + n + " ";
      n = n + 1;
    }

   
    for (let i = 0; i < rightCount && n <= 63; i++) {
      rightText = rightText + n + " ";
      n = n + 1;
    }

   
    let spaces = "";
    let s = 1;
    while (s <= (40 - line * 2)) { 
      spaces = spaces + " ";
      s = s + 1;
    }

    printOut(leftText + spaces + "= " + rightText);
    line = line + 1;
  }

  printOut("Mathematics is fun!");
}

testMaths();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let number = 9;
let result = factorial(number);
printOut("Factorial of " + number + " = " + result);
printOut(newLine);
