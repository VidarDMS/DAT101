"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
printOut("Wake up time = " + (wakeUpTime));
if (wakeUpTime === 7) {
  printOut("I can take the bus to school");
} else if ( wakeUpTime === 6) {
  printOut("I have to take the car to school.");
} else {
  printOut("I can take can the train to school");
} 
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 1;
printOut("value = " + number);
if (5 > 0) {
  printOut("The value is positive");
} else if (5 < 0) {
  printOut("The value is negative");
} else {
  console.log("The number is zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pictureSize = Math.floor(Math.random() * 8 + 1)
if (pictureSize <= 3) {
  printOut(pictureSize + " The image is too small"); //Jeg får feilmelding når jeg legger til tekst foran pictureSize
} else if (pictureSize >= 6) {
  printOut(pictureSize + " Size matters")
} else {
  printOut(pictureSize + " Thank you"); //oppgave 7 er denne linjen
}
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")){
  printOut("You must take vitamin D");
} else {
  printOut("You do not have to take vitamin D");
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList1 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth1 = monthList1.length;
const monthName1 = monthList1[Math.floor(Math.random() * noOfMonth1)];

switch (monthName1) {
  case "January":
  case "Mars":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
  printOut(monthName1 + " har 31 dager i seg");
break
  case "February":
  printOut(monthName1 + " har 28 - 29 dager i seg.");
break
  case "April":
  case "Jun":
  case "September":
  case "November":
  printOut(monthName1 + " har 30 dager i seg");
break
}
/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];

switch (monthName2) {
  case "January":
  case "February":
  case "April":
  case "Mai":
  case "Jun":
  case "Juli":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
  printOut(monthName2 + " Open");
break
  case "April":
  printOut(monthName2 + " Open, but use the entrance is next door");
break
  case "Mars":
  case "Mai":
    printOut(monthName2 + " Closed")
}
printOut(newLine);
