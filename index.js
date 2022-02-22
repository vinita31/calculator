// initializing all the varibales
var input = document.querySelector('#input');
var result = document.querySelector('#result');
var button = document.querySelectorAll('button');
var clear = document.querySelector('#clear');
let erase= document.querySelector('#erase');
var equal = document.querySelector('#equal');

//declaring a array which collect input from user as a form of string
var a = [];

// now we apply different condition
// user press ac button

clear.addEventListener("click", () =>
{
    a = [''];
    result.innerHTML = 0;
    input.className = 'input';
    result.className = 'result';
})

// if user press any button expect clear button then we have to display that number on input screen and calculate the answer
button.forEach((btn) =>
{
    btn.addEventListener("click", () =>
    {
        // when clicked button is not a clear button
        if (!btn.id.match('erase')) {
            //push the input press by user
            a.push(btn.value);
            // join the string 
            input.innerHTML = a.join('');
            //to evaluate  answer
            if (btn.classList.contains('num-btn')) {
                result.innerHTML = eval(a.join(''));
            }
        }
        if (btn.id.match('erase')) {
            a.pop();
            input.innerHTML = a.join('');
            result.innerHTML = eval(a.join(''));
        }
        if (typeof eval(a.join('')) == 'undefined') {
            result.innerHTML = 0
        }

    })
})
