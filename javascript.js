function add(x, y)
{
    return parseFloat(x)+parseFloat(y);
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
    if(y==0)
        return "NO";
    else
        return x/y;
}

function percentage(x)
{
    return x/100;
}

function negate(x)
{
return parseFloat(x)*-1;
}

let operandA, operandB, operator, result, pending;

function operate(a=null, operation=percentage, b=null,)
{
    a=parseFloat(a);
    b=parseFloat(b);

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
    operandA = null;
    operandB = null;
    result = null;
    pending = false;
}

function clearAll()
{
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
        
        
        
        operandA=display.textContent;
        operator=button.textContent;
        
        operatorButton.forEach((button)=>{

            button.style.cssText = 'border: 4px solid black';
        });
        
        if(button.textContent==operator)
            button.style.cssText = 'border: 5px solid black';

        console.log('operandA='+operandA);
        console.log(operator);
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

    document.addEventListener('keydown', (event) => {

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

            result = Math.round((operate(operandA, operator, operandB))*100)/100;

            pending=false;

            // if(!pending)
            // {
                // operatorButton.forEach((button) => {
                //     button.style.cssText = 'border: 4px solid black';
                // });
            // }
        }
    }

    button.addEventListener('click', () => 
    {
        entry();   
    });

    document.addEventListener('keydown', (event)=>{

        if(event.key=='.')
        {
            if(display.textContent.includes('.'))
                return null                
                
        }    
        else if(event.key==button.textContent)
            entry();
    });
}); 

function equal()
{
    if(operandB && operator)
    {
        if(pending)
            operandB=display.textContent;
        
        console.log('operandA='+operandA);
        console.log('operandB='+operandB);

        result = Math.round(operate(operandA, operator, operandB)*100)/100;
        console.log('result='+result);

        display.textContent=result;    

        operandA=result;
        pending=false;

        operatorButton.forEach((button) => {
            button.style.cssText = 'border: 4px solid black';
        });

    }
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
                {   
                    console.log(display.textContent);
                    return null;
                }
                else if(!display.textContent.includes('.'))
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