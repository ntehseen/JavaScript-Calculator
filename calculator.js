function appendToDisplay(input) {
    const display = document.getElementById('display-l');
    display.value += input;
}

function clearDisplay() {
    const display = document.getElementById('display-l');
    display.value = "";
}

function calculate() {
    const display = document.getElementById('display-l');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error!";
    }
}

function square() {
    const display = document.getElementById('display-l');
    const inputValue = parseFloat(display.value);
    display.value = inputValue * inputValue;
}

function cube() {
    const display = document.getElementById('display-l');
    const inputValue = parseFloat(display.value);
    display.value = Math.pow(inputValue,3);
}

function sroot() {
    const display = document.getElementById('display-l');
    const inputValue = parseFloat(display.value);
    display.value = Math.sqrt(inputValue)
}