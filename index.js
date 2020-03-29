    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSeondOperand: false,
        operator: null,
    };

    function updateDisplay() {
        const display = document.querySelector(".calculator-screen");
        display.value = calculator.displayValue;
    }

    updateDisplay();

    const keys = document.querySelector(".calculator-keys");
    keys.addEventListener("click", (event) => {
        const { target } = event;
        if (!target.matches("button")) {
            return;
        }

        if (target.classList.contains("operator")) {
            handleOperator(target.value)
            updateDisplay();
            return;
            console.log(calculator)
        }

        if (target.classList.contains("decimal")) {
            inputDecimal(target.value);
            updateDisplay();
            return;

        }

        if (target.classList.contains("all-clear")) {
            resetCalculator();
            updateDisplay();
            return;

        }

        if (target.classList.contains("clear")) {
            clearCalculator();
            updateDisplay();
            return;

        }
        if (target.classList.contains("backspace")) {
            backspaceCalculator();
            updateDisplay();
            return;

        }

        inputDigit(target.value);
        updateDisplay();

        console.log(calculator)
    });

    function inputDigit(digit) {
        const { displayValue, waitingForSeondOperand } = calculator;

        if (waitingForSeondOperand === true) {

            calculator.displayValue = digit;

            calculator.waitingForSeondOperand = false;
        }

        else {
            calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
        }
    }
        console.log(calculator)

        function inputDecimal(dot) {
                if (calculator.waitingForSeondOperand === true) return;
                if (!calculator.displayValue.includes(dot)) {
                    calculator.displayValue += dot;
                }
        }

            function handleOperator(nextOperator) {
                const { firstOperand, displayValue, operator } = calculator
                const inputValue = parseFloat(displayValue);

              if (operator && calculator.waitingForSeondOperand) {
                calculator.operator = nextOperator;
                console.log(calculator);
                return; 
              }
                if (firstOperand === null) {
                    calculator.firstOperand = inputValue;
                }
                else if (operator) {
                    const currentValue = firstOperand || 0;
                    const results = performCalculation[operator] (firstOperand, inputValue);

                    calculator.displayValue = String(results);
                    calculator.firstOperand = results;

                }

                calculator.waitingForSeondOperand = true;
                calculator.operator = nextOperator;
                console.log(calculator);
            }

            const performCalculation = {
                "/": (firstOperand, secondOperator) => firstOperand / secondOperator,
                "*": (firstOperand, secondOperator) => firstOperand * secondOperator,
                "+": (firstOperand, secondOperator) => firstOperand + secondOperator,
                "-": (firstOperand, secondOperator) => firstOperand - secondOperator,
                "=": (firstOperand, secondOperator) => secondOperator
            }

            function resetCalculator() {
                calculator.displayValue = "0";
                calculator.firstOperand = null;
                calculator.waitingForSeondOperand = false;
                calculator.operator = null;
               
            }

            function clearCalculator() {
                calculator.displayValue = "0";
                // calculator.firstOperand = null;
                // calculator.waitingForSeondOperand = false;
                // calculator.operator = null;
                // console.log(calculator);
            }


            function backspaceCalculator() {
                calculator.displayValue = calculator.displayValue.substring(0, calculator.displayValue.length - 1);
                // calculator.firstOperand = null;
                // calculator.waitingForSeondOperand = false;
                // calculator.operator = null;
            }
         

            
