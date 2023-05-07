function add(x, y)
{
    return x+y;
}

function subtract(x, y)
{
    return x-y;
}

function multiply(x,y)
{
    return x*y;
}

function divide(x,y)
{
    return x/y;
}

function percentage(x)
{
    return x/100;
}

function negate(x)
{
    return x*-1;
}

let operandA, operandB, operator;

function operate(a, operation=percentage, b=null,)
{
    switch (operation)
    {
        case add:
            return add(a,b);
            break;
        case subtract:
            return subtract(a,b);
            break;
        case multiply:
            return multiply(a,b);
            break;
        case divide:
            return divide(a,b);
            break;
        case percentage:
            return percentage(a);
            break;
        case negate:
            return negate(a);
            break;
    }
    return true;
}

const clearAll = document.getElementById('clearAll');
const clear = document.getElementById('clear');
const number = document.querySelectorAll('[data-number]');
const display = document.getElementById('display');

number.forEach((button) => {button.addEventListener('click', () => display.textContent+=button.textContent)});
clearAll.addEventListener('click', () => display.textContent='');
clear.addEventListener('click', () => {
        
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
})
// button.addEventListener('click', () => display.textContent+=button.textContent);