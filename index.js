
let number1 = parseInt (prompt('Input first Number'));
let operator = prompt('Enter operator (+, -, *, /)');
let number2 = parseInt (prompt('Input Second Number'));


if(operator ==="+"){
    console.log(number1 + number2)
}else if (operator === "-"){
    console.log(number1 - number2)
}else if (operator === "*"){
    console.log(number1 * number2)
}else if (operator === "/"){
    console.log(number1 / number2)
}