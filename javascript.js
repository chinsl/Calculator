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

const clearAllButton = document.getElementById('clearAll');
const clearButton = document.getElementById('clear');
const number = document.querySelectorAll('[data-number]');
const display = document.getElementById('display');

number.forEach((button) => {
    
    button.addEventListener('click', () => display.textContent+=button.textContent)});

clearAllButton.addEventListener('click', () => display.textContent='');

clearButton.addEventListener('click', () => clear());


function clear(){
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
}


document.addEventListener('keydown', (event) => {

    console.log(event);

    if(isNaN(event.key))
    {
        if(event.key == 'c' || event.key == "Backspace")
            clear();
        else if(event.key=='.')
        {
            if(display.textContent.includes('.'))
                return null;
            display.textContent+='.';
        }
        else
            return null
    }
    else
        display.textContent += event.key;
})

