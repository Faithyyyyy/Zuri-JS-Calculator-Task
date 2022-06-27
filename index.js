
let number1 = parseInt (prompt('Input first Number'));
let operator = prompt('Enter operator (+, -, *, /)');
let number2 = parseInt (prompt('Input Second Number'));


if(operator ==="+"){
    alert(number1 + number2)
}else if (operator === "-"){
    alert(number1 - number2)
}else if (operator === "*"){
    alert (number1 * number2)
}else if (operator === "/"){
    alert(number1 / number2)
}
