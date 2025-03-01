const prompt = require("prompt-sync")()

const number1 = parseFloat(prompt("Enter Number 1:"))
const number2 = parseFloat(prompt("Enter Number 2:"))
const operator = prompt("Enter the sign:")

let result;

let valid =true;  // to make sure only a vali result is posted
switch(operator){
    case "+":
        result = number1 + number1
        break;
    case "-":
        result = number1 - number1
        break; 
    case "/":
        result = number1 / number1
        break;
    case "*":
        result = number1 * number1
        break;    
    default:
        console.log("Invalid") 
        valid = false;   //if false then the true runs
        break;
}        
     
if (valid) console.log(number1, operator, number2, "=", result)