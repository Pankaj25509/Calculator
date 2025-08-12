let string = "";
const display = document.querySelector("input");
let buttons = document.querySelectorAll('.button, .zero, .right_button, .top_button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerText);
    });
});
document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('Del');
    } else if (key.toLowerCase() === 'c') {
        handleInput('C');
    }
});

function handleInput(value) {
    if (value === '=') {
        try {
            let expression = string.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
            string = eval(expression);
        } catch {
            string = "Error";
        }
    } 
    else if (value === 'C') { 
        string = "";
    } 
    else if (value === 'Del') {
        string = string.slice(0, -1);
    } 
    else {
        string += value;
    }
    display.value = string;
}
