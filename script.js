/* Web Browser Calculator */

const equationContainer = document.querySelector('.equation')
//this houses a smaller font verison of the complete equation
const equationTxtSmall = document.createElement('p');
equationContainer.appendChild(equationTxtSmall);
equationTxtSmall.textContent = "";

//text input box for calculator
const equationTxt = document.createElement('INPUT');
equationTxt.setAttribute = ('type','text')
equationContainer.appendChild(equationTxt);

//need to create a 2ND text box that will house the bigger font 





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