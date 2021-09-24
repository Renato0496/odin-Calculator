let numbers = document.querySelectorAll('.numbers');
let operands = document.querySelectorAll('.operands');
let ac = document.querySelector('.ac');
let equal = document.querySelector('.equal');
let current = document.querySelector('#botDisplay');
let accumulate = document.querySelector('#topDisplay');

// operators
let add = (a, b) => a += b;
let subtract = (a, b) => a -= b;
let multiply = (a, b) => a *= b;
let divide = (a, b) => a = (a / b);
let operate = function (operator, a, b) {
    return operator(a,b);
};

//event listeners
operands.forEach(oper => oper.addEventListener('click', function () {
    let sign = this.textContent;
    if (!accumulate.textContent&&current.textContent) {
        accumulate.innerHTML = `${current.textContent} ${sign}`;
        current.innerHTML = '';
    } else if (accumulate.textContent && current.textContent){
        let first = Number(accumulate.textContent.split(' ')[0]);
        let signToUse = accumulate.textContent.split(' ')[1];
        let second = Number(current.textContent);
        if (signToUse === '+'){
            let theNewerAccu = operate(add,first,second);
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === '-'){
            let theNewerAccu = operate(subtract,first,second);
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === 'x'){
            let theNewerAccu = operate(multiply,first,second);
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === '÷'){
            let theNewerAccu = operate(divide,first,second);
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        };
        current.innerHTML = '';
    }
}));

numbers.forEach(oper => oper.addEventListener('click', function () {
    if (!current.textContent) {
        newOne = [];
        newOne.push(this.value);
        current.innerHTML = newOne;
    } else if (current.textContent) {
        let intermediate = current.textContent.split('');
        intermediate.push(this.value);
        let anotherOne = intermediate.join('');
        current.innerHTML = anotherOne;
    }
}));

ac.addEventListener('click', function () {
    current.innerHTML = '';
    accumulate.innerHTML = '';
});
equal.addEventListener('click', function () {
    if (current.textContent && accumulate.textContent){
        let first = Number(accumulate.textContent.split(' ')[0]);
        let signToUse = accumulate.textContent.split(' ')[1];
        let second = Number(current.textContent);
        if (signToUse === '+'){
            let theNewerAccu = operate(add,first,second);
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === '-'){
            let theNewerAccu = operate(subtract,first,second);
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === 'x'){
            let theNewerAccu = operate(multiply,first,second);
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === '÷'){
            let theNewerAccu = operate(divide,first,second);
            accumulate.innerHTML = `${theNewerAccu}`;
        };
    };
    current.innerHTML = '';
});