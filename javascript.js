function add(x, y)
{
    return Number(x)+Number(y);
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
    return Number(x)*-1;
}

let operandA, operandB, operator, newEntry, repeat, result, pending;



function operate(a=null, operation=percentage, b=null,)
{
    console.log('operation='+operation);
    switch (operation)
    {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
            break;
        case '÷':
            return divide(a,b);
            break;
        case '%':
            return percentage(a);
            break;
        case '+/-':
            return negate(a);
            break;
    }
    return 'test';
}

function backspace(){
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
}

function reset(){
    console.log('operandA='+operandA);
    console.log('operandB='+operandB);
    operandA=null;
    operandB=null;
    result=null;
    pending=false;
    newEntry=null;
}

function clearAll()
{
    // reset();
    display.textContent='';
}


const clearAllButton = document.getElementById('clearAll');
const clearButton = document.getElementById('clear');
const number = document.querySelectorAll('[data-number]');
const display = document.getElementById('display');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalButton=document.getElementById('equals');
const negateButton=document.getElementById('negation');

negateButton.addEventListener('click', ()=>{
    if(display.textContent!='')
        display.textContent=negate(display.textContent);
});

operatorButton.forEach((button) => {

    function operation(){

        pending=true;
        button.style.cssText = 'border: 5px solid black';
    
        operandA=display.textContent;
        operator=button.textContent;
    
        console.log('operandA='+operandA);
        console.log('operandB='+operandB);
        //store first operand value and operator upon operator button click 
        
        if(operandA && operandB)
        {
            display.textContent=result;   
            operandA=result;
            operandB=null; 
        }
    }

    button.addEventListener('click', () => {
        operation();
    });

    document.addEventListener('keydown', (event)=>{
        if(event.key==button.textContent)
                operation();
    });
});


number.forEach((button) => {

    function entry()
    {
        if(pending)
        clearAll();

        display.textContent+= button.textContent;

        if(pending)
        {
            operandB=display.textContent

            result = operate(operandA, operator, operandB);
                // operandA=result;

            pending=false;

            if(!pending)
            {
                operatorButton.forEach((button) => {
                    button.style.cssText = 'border: 4px solid black';

                });
            }
        }
    }

    button.addEventListener('click', () => 
    {
        entry();   
    });

    document.addEventListener('keydown', (event)=>{
        if(event.key==button.textContent)
            entry();
    });
});

function equal()
{
    if(pending)
        operandB=display.textContent;
    
    console.log('operandA='+operandA);
    console.log('operandB='+operandB);

    result = operate(operandA, operator, operandB);
    console.log('result='+result);

    display.textContent=result;    

    operandA=result;
    pending=false;
}

equalButton.addEventListener('click', ()=>{
   
    equal();
})

clearAllButton.addEventListener('click', () => {
    clearAll();
    reset();
});

clearButton.addEventListener('click', () => backspace());

document.addEventListener('keydown', (event) => {

    console.log(event);

    if(isNaN(event.key))
    {
        switch (event.key)
        {
            case 'c':
                clearAll(); reset();
                break;
            case 'Backspace':
                backspace();
                break;
            case '.':
                if(display.textContent.includes('.'))
                    return null;
                display.textContent+='.';
                break;
            case '=':
                equal();
                break;
            case 'Enter':
                equal();
            default:
                return null;
        }
    }
})