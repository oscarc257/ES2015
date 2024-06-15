//ES5 Map Callback

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// **ES2015 Arrow Functions Shorthand**

//Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = arr => arr.map(val => val * 2); //This uses the arrow function syntax to create a concise one-liner for doubling the values in an array.


//**Refactor the following function to use arrow functions:**

//Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }


  //This version of the function uses arrow functions for both map and filter operations, and it combines them into a single line for conciseness.
  const squareAndFindEvens = numbers => 
    numbers.map(num => num ** 2).filter(square => square % 2 === 0) 