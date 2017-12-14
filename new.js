// Global variables:

var buttons = document.getElementsByTagName('input')

// Checking vars:

var inputChecking = document.getElementById('checking-input')
var depositChecking = buttons[1]
var withdrawChecking = buttons[2]
var accountDisplayChecking = document.getElementsByClassName('balance')[0]

// Savings vars:

var depositSavings = buttons[4]
var withdrawSavings = buttons[5]
var inputSavings = document.getElementById('savings-input')
accountDisplaySavings = document.getElementsByClassName('balance')[1]

/////////////////////

// Checking Account Balance:

var accBalChecking = accountDisplayChecking.innerHTML

/////////////////////


///// Checking Deposit Event Listener:

depositChecking.addEventListener('click', function () {
    // Get Checking input value: 
  var depositValueChecking = parseInt(inputChecking.value)
  console.log(depositValueChecking)

  // split and convert to integer
  var initialAccValue = parseInt(accountDisplayChecking.innerHTML.split('$')[1])

  // Combine deposit with balance
  var newBalance = '$' + (initialAccValue + depositValueChecking)
  console.log(newBalance)

  // Insert New Balance into HTML
  accountDisplayChecking.innerHTML = newBalance

})

// checking Withdraw Event Listener

withdrawChecking.addEventListener("click", 
function () {
  
    // Get Checking input value: 
  var withdrawValueChecking = parseInt(inputChecking.value)
  console.log(withdrawValueChecking)

  // split and convert to integer
  var initialAccValue = parseInt(accountDisplayChecking.innerHTML.split('$')[1])

  // IF available
  if (initialAccValue - withdrawValueChecking >= 0) {
    // Take withdraw from balance 
    var newBalance = '$' + (initialAccValue - withdrawValueChecking)
    console.log(newBalance)

    // Insert New Balance into HTML
    accountDisplayChecking.innerHTML = newBalance
  }
  if (newBalance === '$0') {
    accountDisplayChecking.classList.add('zero')
  }
})
  
// Deposit Savings Event Listener


depositSavings.addEventListener('click', function () {
  // Get Savings input value: 
var depositValueSavings = parseInt(inputSavings.value)
console.log(depositValueSavings)

// split and convert to integer
var initialAccValue = parseInt(accountDisplaySavings.innerHTML.split('$')[1])

// Combine deposit with balance
var newBalance = '$' + (initialAccValue + depositValueSavings)
console.log(newBalance)

// Insert New Balance into HTML
accountDisplaySavings.innerHTML = newBalance

})

// Withdraw Savings Event Listener:


withdrawSavings.addEventListener('click', function () {
  // Get savings input value: 
var withdrawValueSavings = parseInt(inputSavings.value)
console.log(withdrawValueSavings)

// split and convert to integer
var initialAccValue = parseInt(accountDisplaySavings.innerHTML.split('$')[1])

// IF available
  if (initialAccValue - withdrawValueSavings >= 0) {
  // Take withraw from balance
  var newBalance = '$' + (initialAccValue - withdrawValueSavings)
  console.log(newBalance)

  // Insert New Balance into HTML
  accountDisplaySavings.innerHTML = newBalance
  }
  if (newBalance === '$0') {
    accountDisplaySavings.classList.add('zero')
  }
})

