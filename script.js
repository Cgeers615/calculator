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

breaking this down even further: 
    a) when button is clicked take value from button 
    b) take value from button and store it to a new(?) variable (or variable a?)
    c) create a p tag via the DOM and add it to the div .equation
    d) display num1 value in the div .equationTxt
*/

//a
let mathBtns = document.querySelectorAll('.mathButtons');

//c
const equationContainer = document.querySelector('.equation')
const equationTxt = document.createElement('p');
equationContainer.appendChild(equationTxt);
equationTxt.textContent = "";

mathBtns.forEach((mathButtons) => {
    mathButtons.addEventListener('click',() => {
        // //b) take values from btns and assign it to variable num1
        // let num1 = numberBtn.value
        // //d
        // equationTxt.textContent = numberBtn.value;
        // console.log(num1)
        
       equationTxt.textContent += mathButtons.value;


    })
})

/* Step 5)
Make the calculator work by taking the values of the first (num1), the operator (operator) and the 2nd number (num2) and then run the operate function when the = button is pressed. 

https://www.geeksforgeeks.org/javascript-calculator/

Things to remember / watch for: 
  - calculator should not evaluate more than a SINGLE PAIR of numbers at a time 
    example:  you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-)
  - Round anwsers with long decimals so that they don't over flow the display (how to do this tbd)
  - Pressing the = sign BEFORE entering all numbers could cause problems 
  - Pressing clear, should completely clear the calculator (idea for this is a function called reset that sets everything back to all original values?)
  - Display a error message when users try to divide by 0 
*/

/* Breaking down step 5 
    a) when = button is clicked return the value of inside of the equation box as a string
    b) take said string and make that an array seperating the values by the operator
    c) assign the array item with an index of 0 to varaible a
    d) assign the array item with an index of 1 to the variable called operator
    e) assign the array item with an idex of 2 to the variable b
    f) THEN run calculate function
    g) display the return value of the calcuate function inside the equation box
*/

const equalBtn = document.querySelector('.submitBtn')

//a 
equalBtn.addEventListener('click',() => {
    console.log("Clicked");
}


)