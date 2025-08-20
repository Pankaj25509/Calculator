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
        e.preventDefault();
        handleInput(key);
    } else if (key === 'Enter') {
        e.preventDefault();
        handleInput('=');
    } else if (key === 'Backspace') {
        e.preventDefault();
        handleInput('Del');
    } else if (key.toLowerCase() === 'c') {
        e.preventDefault();
        handleInput('C');
    } else if (key.toLowerCase() === 'a') {
        e.preventDefault();
        handleInput('AC');
    }
});

function handleInput(value) {
    if (value === '=') {
        try {
            let expression = string.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
            string = eval(expression).toString();
        } catch {
            string = "Error";
        }
    } 
    else if (value === 'C') { 
        string = string.slice(0, -1);
    } 
    else if (value === 'AC') {
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