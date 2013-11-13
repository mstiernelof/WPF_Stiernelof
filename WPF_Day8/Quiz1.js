/**
 * Created by mstiernelof on 11/13/13.
 */
//Please write a description of each command
//and supply an and example of it usage


//creating variables
//When you create a variable you are storing a number or string inside that variable (assigning value)
//Variables can be given static things or you can prompt the user for information
var myAge = 24;
var myName = "Marie";
console.log("1. "+myAge);
console.log("2. "+myName);

//Writing expressions *Google/Screencast* Basically just instructions for the computer on line at a time.
console.log("3. This tells the computer to show this string."); //log to console "string"

//adding and subtracting in javascript is pretty straight forward. You use + and -
//You can add/subtract numbers and variables
//For example how old was I 10 years ago.
var myAge = 24;
var backInTheDay = myAge - 10 //must make sure both sides balanced
//can't just put myAge - 10 or 24 - 10
console.log("4. "+backInTheDay);


//multiplication and division in javascript is pretty straight forward. You use * and /
//You can multiply/divide numbers and variables. But when formulas get complex you have
// to remember the order of operations to make sure the computer understands exactly what you want it to do.

//multiply
var length = 4;
var width = 5;
var height = 6;
var volume = length * width * height;
console.log("5. "+volume);

//divide
var slicePerPizza = 12;
var people = 3;
var slicePerPerson = slicePerPizza/people;
console.log("6. "+slicePerPerson);


// modulous is helpful for finding out if a number is even or odd
var even = 24 % 2; //If the remainder is 0 the number is even. 2 divide into 24 with no remainder.
console.log("7. "+even);


//for loop helpful for shortening code (esp with arrays)
//(start at; condition; add until condition met){when condition met do this}
//*Google* instead of having to write everything out computer will loop
// through a block of code a set number of times
//*Google*
var cars = [];
for (i=0;i<cars.length;i++){
    console.log("8. "+cars[i]+"<br>");
}

//if statement is a conditional statement
//Usually comes with an else. if this condition, do this, if anything but this (else) do this other thing.
//Else doesn't need a condition but Else if does need a condition
var age = 18;
var friendAge = 21;
if (age>=21){
   console.log("9. You can drink!"); //if met you can drink
}else if (friendAge >=21){
    console.log("9. Call up your friend and drink!"); //if met you have connects
}
else {
    console.log("9. No booze for you!"); //any other response gets No booze
}









