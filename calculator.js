const calculator = document.querySelector("#calculator")

// Create the display
const display = document.createElement("input")
display.type = "text"
display.id = "display"
display.disabled = true
calculator.appendChild(display)

// Create the buttons
const buttons = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "C",
  "0",
  "=",
  "/",
]
// Loop trough the buttons and append them
buttons.forEach((button) => {
  const buttonElement = document.createElement("button")
  buttonElement.textContent = button
  calculator.appendChild(buttonElement)
  // Change the button's background
  if (button === "+" || button === "-" || button === "*" || button === "/") {
    buttonElement.style.backgroundColor = "#ff96008a"
  }
  if (button === "C") {
    buttonElement.style.backgroundColor = "#ff000070"
  }
  if (button === "=") {
    buttonElement.style.backgroundColor = "#ff000070"
  }
})

// Create the history
const history = document.createElement("div")
history.id = "history"
calculator.appendChild(history)
// Add event listeners to the buttons
calculator.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const button = event.target.textContent

    if (button === "C") {
      // Clear the display
      display.value = ""
    } else if (button === "=") {
      // Calculate the result
      try {
        const result = computeResult(display.value)
        // Add the operation to the history
        history.innerHTML += `${display.value} = ${result}<br>`
        // Scroll to the bottom of the history
        history.scrollTop = history.scrollHeight
        // Set the display value to the result
        display.value = result
      } catch (error) {
        display.value = "Error"
      }
    } else {
      // Add the button's value to the display
      display.value += button
    }
  }
})

// Function to compute the result of a string expression
function computeResult(str) {
  return Function("return " + str)()
}
