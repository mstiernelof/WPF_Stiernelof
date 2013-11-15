/**
 *  Created by marie stiernelof 11/13/13 Assignment: Conditionals
 */
//create code that calculates a result
//submits 4
//what will code calculate
//2 givens that should be prompted
//At least two factors must be essential for the calculation.
// If one of the factors (the pieces of information you are collecting with the prompts)
// is not needed in order to calculate the result then it is not essential.
//declare variable for the result
//Calculate the result using the variables in an expression (NOT the literal values or numbers)
//Result should appear in the browser's console. With an explanation, include units of measurement

//!! Must use conditionals to validate the information
//Ex. if the user does not enter a value for the first prompt, make a conditional that checks if
// the value is empty. You can do this by evaluating if the contents of the prompt are the same
// as an empty string (which looks like "" i.e. thats two quotations with no character between them)
//comment on every line explaining what is being done

//Each of the following must be used in in at least one of the 3 projects
//1.ternary 2.else if 3.logical operator 4.relational operator other than ==
//20 commits for each project!

//If I work X hours a week and get paid X dollars an hour. How long will I have to work to
// be able to afford $1000 surgery for my cat.

var hoursPerWeek = parseInt(prompt("How many hours per week do you work?"));
//prompting the value for how many hours per week are worked. And making sure
// the value entered will be treated as a number
var wagePerHour = parseInt(prompt("How much do you get paid per hour?"));
var surgeryCost = 1000;
//prompting the value for how much the user is paid per hour. And making sure
// the value entered will be treated as a number
var wagePerWeek = hoursPerWeek * wagePerHour;
//calculating how much you would be paid in a week by multiplying hours per week by wage per hour
var weeksUntilGoal = 1000/wagePerWeek;
//dividing the cost of surgery with the amount you would be paid in a week to see how many weeks
// you would have to work to reach that goal
if (hoursPerWeek == ""){
    console.log("Not enough adequate information provided. Please enter a number for hours per week")
}else if (wagePerWeek == ""){
    console.log("Not enough adequate information provided. Please enter a number for pay per hour")
}else {console.log("I will have to work "+weeksUntilGoal+" weeks to afford surgery for my cat.");}
//starting work on the conditional part of the assignment


//Logging the result to the console and making sure that the result is explained
// and that there is proper spacing for better readability.


