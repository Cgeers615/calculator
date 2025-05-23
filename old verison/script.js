/* Web Browser Calculator */
/* Step 1 - 
Write 4 functions that represent the basic calcuator functions of add, subtract, multiple and divide

*/
const equationContainer = document.querySelector('.equation')
const equationTxt = document.createElement('p');
equationContainer.appendChild(equationTxt);
equationTxt.textContent = "";

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
//divide by 0 not allowed - Display a error message when users try to divide by 0 
    if (a == 0 || b == 0) {
        alert ("Error, stop trying to break my app");
    }
    else return a / b;
}


// Step 2 - create variables for numbers and operators that will be used later

let a = "";
let b = "";
let operator = ""; //operator is set to be blank for now until button for math is selected 


/*Step 3 
Create a new function called calculate that takes the 2 numbers and the operator, and then runs one of the 4 basic math functions
for operate function: if operate = math symbol (which will be a string) then run function. 

Round anwsers with long decimals so that they don't over flow the display
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


let mathBtns = document.querySelectorAll('.mathButtons');

//4c


mathBtns.forEach((mathButtons) => {
    mathButtons.addEventListener('click',() => {
       //4a, 4b, 4d
       equationTxt.textContent += mathButtons.value;


    })
})

/* Step 5)
Make the calculator work by taking the values of the first (num1), the operator (operator) and the 2nd number (num2) and then run the operate function when the = button is pressed. 

Breaking down step 5 
    a) when = button is clicked return the value of inside of the equation box as a string
    b) take said string and make that an array seperating the values by the operator <-- use RegEx? 
    c) assign the array item with an index of 0 to varaible a
    d) assign the array item with an index of 1 to the variable called operator
    e) assign the array item with an idex of 2 to the variable b
    f) THEN run calculate function
    g) display the return value of the calcuate function inside the equation box
*/

/* Step 6) 
Evaluate "complex" basic arthmetic - calculator should not evaluate more than a SINGLE PAIR of numbers at a time 
    example:  you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-)

Breaking down step 6
    a) Evaluate numArr to see IF there is more than 3 entries - use if/else statement to wrap 5c-5e where the if would evaluate for the bigger array index and the else would assign a,b and operator and run the calculate function
    b) If there is more than 3 entries in the array than solve the first math function <-- use the slice method here
    c) take total of the first math function and make the the first entry into the array <-- this will replace the first 3 INDEXES OF THE NUM ARR 
        -should this return as the original array or as a copy of the original array
    d) run the calculate function again, assigning a,b and operator to be the next 3 values in the array <-- this will be done in some form of loop cycle, 
    e) repeat steps 6a - d until there until array length gets down to 3 entries. 
    f) assign value of completed equation to the equationTxt 
*/

const equalBtn = document.querySelector('.submitBtn')

//5a 
equalBtn.addEventListener('click',() => {
/*Wrap the following into a function */  
    let numString = equationTxt.textContent;

    //5b
    let numArr = numString.split(/([+\-*/])/)

  

    //6d,e,f
    let i = numArr.length 
   do {
    //6a
    if (numArr.length > 3){
         //6b
            let numSliced = numArr.slice(0,3);
            let a = Number(numSliced[0]);
            let operator = numSliced[1];
            let b = Number(numSliced[2]);
            let c = calculate(a,b,operator);
        //6c
            // const numSpliced = numArr.toSpliced(0,3,c);
           numArr.splice(0,3,c);
        //console.table(numArr);
    }

    else if (numArr.includes('') || numArr.length < 2) {
       alert('error')
        equationTxt.textContent = 'Error';    
    }
    
    else if (numArr.length == 3) {
                //5c,d,e
                let a = Number(numArr[0]);
                let operator = numArr[1];
                let b = Number(numArr[2]);
        
                //5f,g
                equationTxt.textContent = Number(calculate(a,b,operator).toFixed(3));
    }
   --i }
   while(i > 3)
/*end function */
}
)


/* Step 7) Reset Button - when user clicks 'Reset' Calc resets - */
const resetBtn = document.querySelector('.resetBtn')

resetBtn.addEventListener('click',() =>{
    equationTxt.textContent = '';

});

/* add a "backspace" button - plan: 
    1) create button reference in the DOM 
    2) add key press event for the backspace button && a click event for the acutal
    3) when backspace button is used, ONLY the most recent key entered will be deleted 
 */ 
const clearBtn = document.querySelector('.clearBtn');

function clear (){
    
    let newString = equationTxt.textContent;
    let stringSlice = newString.slice(0,-1);
    equationTxt.textContent = stringSlice;
 
}

clearBtn.addEventListener('click',clear);



