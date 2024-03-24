let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operator = document.querySelector('#op');
let calculate = document.querySelector('.btn-calculate');
let reset = document.querySelector('.btn-reset');
const result = document.querySelector('span');


calculate.addEventListener('click',function(e){
    // console.log(e.target);
    // console.log(typeof (num1.value));
    // console.log(typeof (num2.value));
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    switch (operator.value) {
        case "+":
            // console.log(a);
            // console.log(b);
            // console.log(typeof (a));
            // console.log(typeof (b));
            result.innerHTML = a + b;
            break;
        case "-":
            // console.log(a);
            // console.log(b);
            // console.log(typeof a);
            // console.log(typeof b);
            result.innerHTML = a - b;
            break;
        case "*":
            // console.log(a);
            // console.log(b);
            // console.log(typeof a);
            // console.log(typeof b);
            result.innerHTML = a * b;
            break;
        case "/":
            // console.log(a);
            // console.log(b);
            // console.log(typeof a);
            // console.log(typeof b);
            result.innerHTML = ((a / b).toFixed(2));
            break;
        default:
            // console.log("invalid operator");
            result.innerHTML = "Invalid Operator";
            break;
    }
})

reset.addEventListener('click',function(e){
    num1.value = "";
    num2.value = "";
    operator.value = "";
    result.innerHTML = "";
    
})



