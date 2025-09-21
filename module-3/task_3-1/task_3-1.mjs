"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 7;
if (wakeUpTime == 6) {
  printOut("I can take the train");
} else if (wakeUpTime === 7) {
  printOut("I can catch the bus to school");
} else {
  printOut(" I must take the car");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const number = 5;
if (number < 5) {
  printOut("positive");
} else if (number > 5){
  printOut("negative");
} else {
  printOut("zero")
}


printOut(newLine);

printOut("--- Part 6, 7----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pictureSize = Math.floor(Math.random() * 8) + 1;
if (pictureSize < 4) {
  printOut("Size is to small");
} else if (pictureSize > 6) {
  printOut("Image is to large");
} 
else {
  printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "Mai", "June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes ("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList1 = ["January", "February", "March", "April", "Mai", "June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth1 = monthList1.length;
const monthName1 = monthList1[Math.floor(Math.random() * noOfMonth1)];
switch (monthName1) {
  case "January":
  case "March":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
    printOut(monthName1 + " har 31 dager");
    break
  case "February":
    printOut(monthName1 + " har 28 eller 29 dager i seg");
    break
  case "April":
  case "June":
  case "September":
  case "November":
    printOut(monthName1 + " har 30 dager i seg");
}
/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 = ["January", "February", "March", "April", "Mai", "June", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList1.length;
const monthName2 = monthList1[Math.floor(Math.random() * noOfMonth1)];
switch (monthName2) {
  case "January":
  case "February":
  case "June":
  case "September":
  case "November":
  case "Juli":
  case "August":
  case "October":
  case "December":
    printOut(monthName2 + " open");
    break
  case "April":
    printOut(monthName2 + " Open, but enterance is next door");
    break
case "March":
case "Mai":
    printOut(monthName2 + " closed");
}
printOut(newLine);
