/* Web Browser Calculator */

const equationContainer = document.querySelector('.equation')

//this will houses a smaller font verison of the complete equation
const equationTxtSmall = document.createElement('p');
equationContainer.appendChild(equationTxtSmall);
equationTxtSmall.textContent = "";

//text input box for calculator
const equationTxt = document.createElement('INPUT');
equationTxt.setAttribute = ('type','text')
equationContainer.appendChild(equationTxt);

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

//calculate functions
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







/* Add Keyboard support - plan: **LOOK INTO DATA KEYS **
  1) make equationTxt into a text input 
  2) listen for keys 0-9, +, -, *, /, ., enter to be PRESSED down 
        when keys 0-9 are pressed down, reflect the value of said key in the equationTxt
        when +, -, *, / key is pressed down, add that to the equationTxt 
        when enter is pressed run the calculation function 
  
*/


/*Extra Credit:
    - Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display. --unsure
    - Add keyboard support! <-- doable

*/ 