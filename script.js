let numbers = document.querySelectorAll('.numbers');
let operands = document.querySelectorAll('.operands');
let ac = document.querySelector('.ac');
let equal = document.querySelector('.equal');
let current = document.querySelector('#botDisplay');
let accumulate = document.querySelector('#topDisplay');

// operators
let add = (a,b) => a += b;
let subtract = (a,b) => a-=b;
let multiply = (a,b) => a*=b;
let divide = (a,b) => a = (a/b);
let operate = function(operator,a,b) {
    return operator(a,b);
};

//event listeners
operands.forEach(oper => oper.addEventListener('click',function(){
    alert(this.textContent)
}));
numbers.forEach(oper => oper.addEventListener('click',function(){
    if (!current.textContent){
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
ac.addEventListener('click',function(){
    alert(this.textContent)
});
equal.addEventListener('click',function(){
    alert(this.textContent)
});