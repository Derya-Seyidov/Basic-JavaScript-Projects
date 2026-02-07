// Create calculator object to store values
// Calculator object stores all values and states
// Display_Value: value shown on calculator screen
// First_Operand: first number entered
// Wait_Second_Operand: checks if second number is expected
// operator: stores selected operator (+, -, *, /)

const Calculator = {
  Display_Value: '0',
  First_Operand: null,
  Wait_Second_Operand: false,
  operator: null,
};

// Updates the calculator screen
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

// Handles digit input
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    Calculator.Display_Value =
      Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// Handles decimal input
function Input_Decimal(dot) {
  if (Calculator.Wait_Second_Operand === true) {
    Calculator.Display_Value = '0.';
    Calculator.Wait_Second_Operand = false;
    return;
  }

  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// Performs calculation
const Perform_Calculation = {
  '/': (first, second) => first / second,
  '*': (first, second) => first * second,
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '=': (first, second) => second,
};

// Handles operator input
function Handle_Operator(nextOperator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  const valueOfInput = parseFloat(Display_Value);

  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = nextOperator;
    return;
  }

  if (First_Operand === null && !isNaN(valueOfInput)) {
    Calculator.First_Operand = valueOfInput;
  } else if (operator) {
    const result =
      Perform_Calculation[operator](First_Operand, valueOfInput);

    Calculator.Display_Value = String(result);
    Calculator.First_Operand = result;
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = nextOperator;
}

// Resets calculator
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// Event listener for buttons
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  Input_Digit(target.value);
  Update_Display();
});

// Initialize display
Update_Display();
