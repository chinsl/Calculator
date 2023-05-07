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
    }
    return true;
}