/* Web Browser Calculator */

/* Documentation for Project
Step 1 - 
    Write 4 functions that represent the basic calcuator functions of add, subtract, multiple and divide

Step 2 - 
    create variables for numbers and operators that will be used later

Step 3 -
    3a) Create a new function called calculate that takes the 2 numbers and the operator, and then runs one of the 4 basic math functions for operate function: if operate = math symbol (which will be a string) then run function. 

    3b) Round anwsers with long decimals so that they don't over flow the display (extra credit)

Step 4 -
    Create the functions that will populate the display when the digit buttons are clicked, store the content of the display (the numbers) in a variable for later use. 

    breaking step 4 down even further: 
    a) create two paragraph tags via the DOM and add it to the div .equation
    b) when button is clicked take value from button 
    c) assign value from button and have it display in the two p tags (equationTxtSmall & equationTxt)
    d) when operator buttons are clicked reset equationTxt so it only shows the operator button value
    e) take values from operator buttons and display it in the equationTxtSmall  
    
Step 5 -
Make the calculator work by taking the values of the first (num1), the operator (operator) and the 2nd number (num2) and then run the operate function when the = button is pressed. 

    breaking down step 5 even further:
    a) when = button is clicked run a function that will return the value of inside of the equationTxtSmall as a string and do the following: 
    b) take said string and make that an array and seperate the values by the operator
    c) assign the array item with an index of 0 to varaible a
    d) assign the array item with an index of 1 to the variable called operator
    e) assign the array item with an idex of 2 to the variable b
    f) run calculate function
    g) display the return value of the calcuate function inside the equation box

Step 6 - 
Evaluate "complex" basic arthmetic - calculator should not evaluate more than a SINGLE PAIR of numbers at a time 
    example:  you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-)

Breaking down step 6 even further:
    a) Evaluate numArr to see IF there is more than 3 entries - use if/else statement to wrap 5c-5e where the if would evaluate for the bigger array index and the else would assign a,b and operator and run the calculate function
    b) If there is more than 3 entries in the array than solve the first math function <-- use the slice method here
    c) take total of the first math function and make the the first entry into the array ---> this will replace the first 3 INDEXES OF THE NUM ARR 
    d) run the calculate function again, assigning a,b and operator to be the next 3 values in the array 
    e) repeat steps 6a - d until there until array length gets down to 3 entries. 
    f) assign value of completed equation to the equationTxt 

Step 7 - Reset Button - when user clicks 'Reset' Calc resets   

Step 8 - Add keyboard support (extra credit)

    breaking  step 8 down even further: 
     
    a) listen for keys 0-9, +, -, *, /, ., enter to be PRESSED down and do the following: 
    b) when keys 0-9 are pressed down, reflect the value of said key in the equationTxt & equationTxtSmall
    c) when +, -, *, / key is pressed down, add that to the equationTxt 
    d) when enter is pressed run the calculation function 

Step 9 - Add a clear button so users can delete numbers WITHOUT reseting entire calculator (extra credit)

    breaking this down even further: 
    a) create button reference in the DOM 
    b) add key press event for the backspace button && a click event for the acutal
    c) when backspace button is used, ONLY the most recent key entered will be deleted 

Step 10 - Disable decimal input if user has already entered a decimal in the equationTxt field, UNTIL an operator button is pushed (extra credit)

Step 11 - Check the display to make sure it doesn't extend past the container it is in.

*/

const equationContainer = document.querySelector('.equation')

//step 4a
//this will houses a smaller font verison of the complete equation
const equationTxtSmall = document.createElement('p');
equationContainer.appendChild(equationTxtSmall);
equationTxtSmall.textContent = "";

// this will be the larger input section
const equationTxt = document.createElement('p');
equationContainer.appendChild(equationTxt);
equationTxt.textContent = "";

//buttons
const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const equalBtn = document.querySelector('.submitBtn')
const resetBtn = document.querySelector('.resetBtn')
const clearBtn = document.querySelector('.clearBtn');
const decimalBtn = document.querySelector('.decimalBtn');

//variables for numbers and operator
let a = "";
let b = "";
let operator = ""; //operator is set to be blank for now until button for it is selected or inputed via keyboard

//basic math functions
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

//calculate function
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

}

//number buttons

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click',() => {
       equationTxt.textContent += numberBtn.value;
       equationTxtSmall.textContent += numberBtn.value;
       checkDisplay(equationTxt, equationTxtSmall);
      
    })
    
})

//operator buttons
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click',() => {
    equationTxt.textContent = ""
    equationTxtSmall.textContent += operatorBtn.value;
    
    })
    
})
 
// decimal btn - disable button if '.' is already found
decimalBtn.addEventListener('click',() =>{
    if(equationTxt.textContent.includes('.')!= true){
        equationTxt.textContent += decimalBtn.value
        equationTxtSmall.textContent += decimalBtn.value
    }
    else 
    return;
})

//evaluate the entry 
function evalEntry(){
let numString = equationTxtSmall.textContent;    


     let numArr = numString.split(/([+\-*/])/)


     let i = numArr.length 
    do {

     if (numArr.length > 3){

             let numSliced = numArr.slice(0,3);
             let a = Number(numSliced[0]);
             let operator = numSliced[1];
             let b = Number(numSliced[2]);
             let c = calculate(a,b,operator);
         
            numArr.splice(0,3,c);

         
     }

     else if (numArr.includes('') || numArr.length < 2) {
        alert('error')
         equationTxt.textContent = 'Error';    
     }
    
     else if (numArr.length == 3) {

                 let a = Number(numArr[0]);
                 let operator = numArr[1];
                 let b = Number(numArr[2]);
        

                 equationTxt.textContent = Number(calculate(a,b,operator).toFixed(3));
                 equationTxtSmall.textContent =  Number(calculate(a,b,operator).toFixed(3));
     }
    --i }
    while(i > 3)
   
}


equalBtn.addEventListener('click',evalEntry);




//reset entire calculation    
resetBtn.addEventListener('click',() =>{
    equationTxtSmall.textContent = '';
    equationTxt.textContent = '';

});

//delete most recent entry
function clear (){

    let newString = equationTxt.textContent;
    let stringSlice = newString.slice(0,-1);
    equationTxt.textContent = stringSlice;
 
    let newStringSmall = equationTxtSmall.textContent;
    let stringSliceSmall = newStringSmall.slice(0,-1);
    equationTxtSmall.textContent = stringSliceSmall;
}

clearBtn.addEventListener('click',clear);


window.addEventListener('keydown',(e) =>{
    //if key pressed is equal to or greater than 0 and equal to or less than 9
    // set the equationTxt container and equationTxtSmall container to the value of the number

    
    if (e.key >= 0 && e.key <= 9) {
        equationTxt.textContent += e.key
        equationTxtSmall.textContent += e.key
        checkDisplay(equationTxt, equationTxtSmall)
    }


   
    //switch statement for math functions 
    switch (e.key) {
        case '+':
        case '-':
        case '*':
        case '/':
            equationTxt.textContent = ""
            equationTxtSmall.textContent += e.key;
            
            break;
        case'Enter':
        case'=':
            evalEntry();
            break;
        case 'Backspace':
            clear();
            break;

    }
    //disable '.' if it is already found by stopping the event propagtion
    if(e.key == '.' ) {

    
    if (equationTxt.textContent.includes('.')!= true){
        equationTxt.textContent += e.key
        equationTxtSmall.textContent += e.key
    }


    else
    e.stopPropagation()
    
}
}
);

function checkDisplay(equationTxtSmall,equationTxt){
    if(equationTxtSmall.textContent.length >= 50) {
        let longerString = equationTxtSmall.textContent.slice(-1);
        alert("Error, equation to large");
    }

    if (equationTxt.textContent.length >= 30){
        alert("Error, equation to large");
    }
   
}