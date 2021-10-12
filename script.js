let numbers = document.querySelectorAll('.numbers');
let operands = document.querySelectorAll('.operands');
let ac = document.querySelector('.ac');
let equal = document.querySelector('.equal');
let eraseNum = document.querySelector('.eraseNumber'); 
let current = document.querySelector('#botDisplay');
let accumulate = document.querySelector('#topDisplay');

// operators
let add = (a, b) => a += b;
let subtract = (a, b) => a -= b;
let multiply = (a, b) => a *= b;
let divide = function (a, b) {
    if (a !== 0) {
        return a = (a / b);
    } else {
        alert('OK, THAT\'S NOT FUN');
    }
};
let operate = function (operator, a, b) {
    let result = operator(a, b);
    if (result.toString() === result.toFixed().toString()) {
        return result;
    } else {
        return result.toFixed(7));
    }
};

// functions 

let useOperand = function () {
    let sign = this.textContent;
    if (!accumulate.textContent && current.textContent || current.textContent && !accumulate.textContent.split(' ')[1]) {
        accumulate.innerHTML = `${current.textContent} ${sign}`;
        current.innerHTML = '';
    } else if (accumulate.textContent.split(' ')[1] && current.textContent) {
        let first = Number(accumulate.textContent.split(' ')[0]);
        let signToUse = accumulate.textContent.split(' ')[1];
        let second = Number(current.textContent);
        if (signToUse === '+') {
            let theNewerAccu = operate(add, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === '-') {
            let theNewerAccu = operate(subtract, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === 'x') {
            let theNewerAccu = operate(multiply, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        } else if (signToUse === '÷') {
            let theNewerAccu = operate(divide, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu} ${sign}`;
        };
        current.innerHTML = '';
    } else if (accumulate.textContent && !accumulate.textContent.split(' ')[1]) {
        let actual = Number(accumulate.textContent);
        accumulate.innerHTML = `${actual} ${sign}`;
    }
};

let writeNumber = function () {   
    accumulate.style.fontWeight = 'normal';
    if (current.textContent.length === 20) {
        alert('max 20 digits!');
        return
    }
    if (!current.textContent) {
        newOne = [];
        newOne.push(this.value);
        current.innerHTML = newOne;
    } else if (current.textContent) {
        let intermediate = current.textContent.split('');
        intermediate.push(this.value);
        let anotherOne = intermediate.join('');
        current.innerHTML = anotherOne;
    };
    current.style.fontWeight = '600px';
};

let clearAll = function () {
    current.innerHTML = '';
    accumulate.innerHTML = '';
};

let endCalculus = function () {
    if (current.textContent && accumulate.textContent.split(' ')[1]) {
        let first = Number(accumulate.textContent.split(' ')[0]);
        let signToUse = accumulate.textContent.split(' ')[1];
        let second = Number(current.textContent);
        if (signToUse === '+') {
            let theNewerAccu = operate(add, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === '-') {
            let theNewerAccu = operate(subtract, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === 'x') {
            let theNewerAccu = operate(multiply, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu}`;
        } else if (signToUse === '÷') {
            let theNewerAccu = operate(divide, first, second);
            if (theNewerAccu.toString().length >= 20) {
                alert('max 20 digits!');
                return;
            };
            accumulate.innerHTML = `${theNewerAccu}`;
        };
        current.innerHTML = '';
        accumulate.style.fontWeight = 'bold';
    } else {
        return
    };
};

let eraseLast = function() {
    if (!current.textContent){
        return
    };
    let newCurr = current.textContent.slice(0,-1);
    current.innerHTML = newCurr;
}

//event listeners
operands.forEach(oper => oper.addEventListener('click', useOperand));

numbers.forEach(oper => oper.addEventListener('click', writeNumber));

ac.addEventListener('click', clearAll);

equal.addEventListener('click', endCalculus);

eraseNum.addEventListener('click', eraseLast);