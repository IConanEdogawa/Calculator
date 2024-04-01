let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function toggleMode() {
    const body = document.body;
  body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const calculator = document.querySelector('.calculator');
  calculator.classList.toggle('dark-mode-calc');
}

function toggleMoreFunctions() {
    const moreFunctions = document.querySelectorAll('.functions'); // Заменил 'functions' на '.functions'
    moreFunctions.forEach(button => {
      button.classList.toggle('show');
    });
  }