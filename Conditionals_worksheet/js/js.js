/**
 * Created by Marie Stiernelof on 11/8/13 Conditionals Worksheet
 */

// Label the section of code appropriately
// Write the givens as variables
// The result should be calculated using variables, not literal values when possible.
// Create code that will make decisions based on the value of the givens
// Print the result of the decision-making to the console.
// Use only code and techniques learned in this class.

// Stuff your face I

var weight =parseInt(prompt("How much do you Weigh?"));  //Prompt competitor's Weight

if(weight >= 250){
    //If weight given is more than or equal to 250
    console.log("You qualify for the heavyweight division.")
}else{
    //If weight is less than 250
    console.log("Sorry, you don't qualify for the heavyweight division. Eat more pie... at home.")
}

//Group 1 Expressions with Conditionals
//Last Chance for Gas!

var mpg = parseInt(prompt("How many miles per gallon does your car get?")); //Prompt values
var gasTank = parseInt(prompt("What percentage of gas do you have left?"));
var tankCapacity =  parseInt(prompt("What is your car's gas tank capacity in gallons?"));

var gasLeft = (tankCapacity*(gasTank/100)*mpg); //Calculate

if (gasLeft >= 200){
       console.log("Keep on trekking.") //If value is enough
   }else{
       console.log("You only have "+gasLeft+" gallons of gas left in your tank. Get gas now!") //If value not enough
   }

//Group 2 Multiple Results
//Check the Login

var username =prompt("Enter your username.");
var password =prompt("Enter your password.");
var correctUsername = "mstiernelof";
var correctPassword = "Yawl321";

if ()




