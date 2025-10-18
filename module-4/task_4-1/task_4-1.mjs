"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// lag objektet med kontotyper
/*const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

printOut(
  AccountType.Normal + ", " +
  AccountType.Saving + ", " +
  AccountType.Credit + ", " +
  AccountType.Pension
); 

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

let accountType = AccountType.Normal;

function toString() {
  return accountType;
}

function setType(aType) {
  printOut("Account is changed from " + accountType + " to " + aType);
  accountType = aType;
}

printOut("myAccount = " + toString());
setType(AccountType.Saving);
printOut("myAccount = " + toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");


let accountType = "Brukskonto"; 
let balance = 0; 

function toString() {
  return accountType;
}

function setType(aType) {
  printOut("Account is changed from " + accountType + " to " + aType);
  accountType = aType;
}

function getBalance() {
  return balance;
}

function deposit(aAmount) {
  balance = balance + aAmount;
  printOut("Deposit of " + aAmount + ", new balance is " + balance);
}

function withdraw(aAmount) {
  balance = balance - aAmount;
  printOut("Withdrawal of " + aAmount + ", new balance is " + balance);
}


deposit(100);
withdraw(25);
printOut("My account balance is " + getBalance());
*/
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

let accountType = AccountType.Saving;
let balance = 75;
let withdrawCount = 0;

function toString() {
  return accountType;
}

function setType(aType) {
  printOut("Account is changed from " + accountType + " to " + aType);
  accountType = aType;
  withdrawCount = 0; 
}

function getBalance() {
  return balance;
}

function deposit(aAmount) {
  balance = balance + aAmount;
  withdrawCount = 0; 
  printOut("Deposit of " + aAmount + ", new balance is " + balance);
}

function withdraw(aAmount) {
  switch (accountType) {
    case AccountType.Pension:
      printOut("You can't withdraw from a Pensionskonto!");
      return;

    case AccountType.Saving:
      if (withdrawCount >= 3) {
        printOut("You can't Withdraw from a Sparekonto more than three times!");
        return;
      }
      break;
  }

  balance = balance - aAmount;
  withdrawCount = withdrawCount + 1;
  printOut("Withdrawal of " + aAmount + ", new balance is " + balance);
}

deposit(25);          
withdraw(30);
withdraw(30);
withdraw(30);
withdraw(30);         
setType(AccountType.Pension);
withdraw(30);         
setType(AccountType.Saving);
withdraw(10);

printOut("My account balance is " + getBalance());


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
