/**
 * Created by marie stiernelof on 11/15/13 Assignment: Expressions - Personal.
 */
//commit 6
//math expression, 3 factors as variables (prompted) 3 arithmetic operators
//prompted value must parseInt
//console output include calculated values, supporting text, string concatenation
//one of each variable with meaningful names (1.array 2.string, 3.number)
//20 submits with meaningful comments

//If I work X hours a week and get paid X dollars an hour. How long will I have to work to
// be able to afford surgery for my cat.

var hoursPerWeek = parseInt(prompt("How many hours per week do you work?"));
//prompting the value for how many hours per week are worked. And making sure
// the value entered will be treated as a number
var wagePerHour = parseInt(prompt("How much do you get paid per hour?"));
//prompting the value for how much the user is paid per hour. And making sure
// the value entered will be treated as a numbers
var surgeryCost = parseInt(prompt("How much will the surgery on your kitty cost?"));