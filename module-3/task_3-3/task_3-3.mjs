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
