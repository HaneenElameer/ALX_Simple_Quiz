function add(number1,number2){
    return number1 + number2
}
function subtract (number1,number2){
    return number1 - number2
}
function multiply (number1,number2){
    return number1 * number2
}
function divide (number1,number2){
    if (number2===0){
        return "error : division by zero"
    }
    return number1 / number2
}
function calculate(operation){
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;
    switch(operation){
        case "add":
            result = add(num1,num2);
            break;
        case "subtract":
            result = subtract(num1,num2);
            break;
        case "divide":
            result = divide(num1,num2);
            break;
        case "multiply":
            result = multiply(num1,num2);
            break;   
        }
        document.getElementById('calculation-result').textContent = result;
}
document.getElementById("add").addEventListener("click",function(){
    calculate("add")
})
document.getElementById("subtract").addEventListener("click",function(){
    calculate("subtract")
})
document.getElementById("divide").addEventListener("click",function(){
    calculate("divide")
})
document.getElementById("multiply").addEventListener("click",function(){
    calculate("multiply")
})

