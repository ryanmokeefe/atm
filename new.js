// Global variables:

var buttons = document.getElementsByTagName('input')

// Checking vars:

var inputChecking = document.getElementById('checking-input')
var depositChecking = buttons[1]
var withdrawChecking = buttons[2]
var accountDisplayChecking = document.getElementsByClassName('balance')[0]

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

// Withdraw Event Listener

withdrawChecking.addEventListener("click", 
function () {
    // Get Checking input value: 
  var withdrawValueChecking = parseInt(inputChecking.value)
  console.log(withdrawValueChecking)

  // split and convert to integer
  var initialAccValue = parseInt(accountDisplayChecking.innerHTML.split('$')[1])

  // Combine deposit with balance
  var newBalance = '$' + (initialAccValue - withdrawValueChecking)
  console.log(newBalance)

  // Insert New Balance into HTML
  accountDisplayChecking.innerHTML = newBalance

})
  




