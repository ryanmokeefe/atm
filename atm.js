// ORIGINAL JS - DO NOT SUBMIT

// BOTH - User amount input fields:

var input = document.getElementsByClassName('input')

var checking = input[0]
var savings = input[1]

// ALL - buttons: 

var buttons = document.getElementsByTagName("input")

var depositChecking = buttons[1]
var withdrawChecking = buttons[2]

var depositSavings = buttons[4]
var withdrawSavings = buttons[5]


// BOTH - bank account totals

var balance = document.getElementsByClassName('balance')

    var balanceChecking = balance[0].value
    var balanceSavings = balance[1].value

// get amount from user input - CHECKING

//    newDepositCheck = checking.value


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

depositChecking.addEventListener('click', function() {
    // selecting the deposit amount
    var depositAmount = parseInt(checking.value)
    // selecting the account balance
    var balance = balanceChecking.split('$')
    // convert account balance to an integer
    var balInt = parseInt(balance[1])

    // add deposit and balance
    // add the numerical items first by placing in parenthises, before adding to a string

    var finalBal = '$' + (depositAmount + balInt)
    // add final balance to HTML
    balanceChecking = finalBal
    console.log(balInt)

})
//////

depositSavings.addEventListener('click', '')

// add event listeners to WITHDRAW buttons - BOTH

withdrawChecking.addEventListener('click', subCheckMoney)
withdrawSavings.addEventListener('click', '')

