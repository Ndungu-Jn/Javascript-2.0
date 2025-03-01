const prompt = require("prompt-sync")()

function getNumber(numberString){
    while(true){
        const number  = parseFloat(prompt("Enter Number " +  numberString + ":" ))
        if (isNaN(number)){
            console.log("invalid input")
        }else {
            return number
        }
    }
    //do something
    //returna value

}

const number1 = getNumber("One");
const number2 = getNumber("Two");


const operator = prompt("Enter the sign:")

let result;

let valid =true;  // to make sure only a vali result is posted
switch(operator){
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break; 
    case "/":
        if (number2 === 0){
            valid = false
            console.log("Zero division error.")
        }
        result = number1 / number2
        break;
    case "*":
        result = number1 * number2
        break;    
    default:
        console.log("Invalid") 
        valid = false;   //if false then the true runs
        break;
}        
     
if (valid) console.log(number1, operator, number2, "=", result)


// learning about functions


    