const display = document.getElementById('display');

// Append numbers and operators
function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Delete the last character
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

// Perform calculation
function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch (e) {
    display.innerText = 'Error';
  }
}
