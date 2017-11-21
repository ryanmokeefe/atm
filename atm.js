$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

// User amount input fields:

var input = document.getElementsByClassName('input')

var checking = input[0]
var savings = input[1]

// buttons: 

var buttons = document.getElementsByTagName("input")

var depositChecking = buttons[1]
var withdrawChecking = buttons[2]

var depositSavings = buttons[4]
var withdrawSavings = buttons[5]

// bank account totals - BOTH

var balance = document.getElementsByClassName('balance')

    var balanceChecking = balance[0]
    var balanceSavings = balance[1]

// get amount from user input - CHECKING

    newDepositCheck = checking.value


// click DEPOSIT to add to CHECKING

addCheckMoney = function() {
    var balance = parseInt(balanceChecking);
    var deposit = parseInt(newDepositCheck);
    balance = balance + deposit;
    balanceChecking.innerHTML = balance
}

// click WITHDRAW to subtract from checking

subCheckMoney = function() {
   // balanceChecking.innerHTML = 
}

/////


// get amount from user input - SAVINGS

newDepositSave = savings.value

// click DEPOSIT to add to SAVINGS

// click WITHDRAW to subtract from SAVINGS







// add event listeners to DEPOSIT buttons - BOTH

depositChecking.addEventListener('click', addCheckMoney)
depositSavings.addEventListener('click', '')

// add event listeners to WITHDRAW buttons - BOTH

withdrawChecking.addEventListener('click', subCheckMoney)
withdrawSavings.addEventListener('click', '')

