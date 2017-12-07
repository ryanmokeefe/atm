// Global variables:

var buttons = document.getElementsByTagName('input')

// Checking vars:

var inputChecking = document.getElementById('checking-input')
var depositChecking = buttons[1]
var withdrawChecking = buttons[2]




///// Deposit Event Listener:

depositChecking.addEventListener('click', function () {
    // Get Checking input value: 
    var depositValueChecking = parseInt(inputChecking.value)

    // Checking Account Balance:
    var accBalChecking = document.getElementsByClassName('balance')[0].innerHTML
    // split and convert to integer
    var initialAccValue = parseInt(accBalChecking.split('$')[1])

    // Combine deposit with balance
    var newBalance = '$' + (initialAccValue + depositValueChecking)
    console.log(newBalance)

    // Insert New Balance into HTML
    accBalChecking.innerHTML = newBalance
})

// Withdraw Event Listener

withdrawChecking.addEventListener("click", function() {
  console.log('helloooo')
})



