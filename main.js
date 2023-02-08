const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

var x = 1
var y = 2
let result = add(x, y)
console.log(result)


const subtract = (firstNumber, secondNumber) => {
    const sum = firstNumber - secondNumber
    return sum
}

result = subtract(x, y)
console.log(result)


const divide = (firstNumber, secondNumber) => {
    const sum = firstNumber / secondNumber
    return sum
}

result = divide(x, y)
console.log(result)


const multiply = (firstNumber, secondNumber) => {
    const sum = firstNumber * secondNumber
    return sum
}

result = multiply(x, y)
console.log(result)

const square = (number) => {
    const sum = number * number
    return sum
}

result = square(x)
console.log(result)


var fourLegs = multiply(0.25, 4)
var twoLegs = multiply(0.75, 2)
var allLegs = add(fourLegs, twoLegs)
var allAnimals = divide(60, allLegs)

console.log(allAnimals)


//the calculator fuction takes a variable defined by the action we need this function to perform. 
//which then accepts the needed number of parameters for the action
//inside the body a sum is named and the problem is built to find the result
//finally the result calls the function to give the parameter
//the result is logged to the console