/* Web Browser Calculator */



/* Step 1 - 
Write 4 functions that represent the basic calcuator functions of add, subtract, multiple and divide

*/

//add
function addNum(a, b) {
    return a + b;
};

//subtract
function subNum (a, b) {
    return a - b;
}

//multiply
function multiplyNum(a, b) {
    return a * b;
}

//divide
function divideNum(a, b) {
    return a / b;
}


// Step 2 - create variables for numbers and operators that will be used later

let a = 0;
let b = 0;
let operator = ""; //operator is set to be blank for now until button for math is selected 


/*Step 3 
Create a new function called calculate that takes the 2 numbers and the operator, and then runs one of the 4 basic math functions
for operate function: if operate = math symbol (which will be a string) then run function
*/ 

function calculate (a, b, operator){
    if(operator === "+"){
        return addNum(a, b);
    };
    if(operator === "-"){
       return subNum(a, b);
    }
    if(operator === "*"){
        return multiplyNum(a,b);
    }
    if(operator === '/') {
        return divideNum(a,b);
    }
    else 
    return console.log("fail") //this is for testing purposes only and should be removed later

}

/* Step 4 
Create the functions that will populate the display when the digit buttons are clicked, store the content of the display (the numbers) in a variable for later use. 
*/

/* breaking this down even further: 
    a) when button is clicked take value from button 
*/

let numberBtns = document.querySelectorAll('.numberBtn');

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click',() => {
        console.log(numberBtn.value)
    })
})