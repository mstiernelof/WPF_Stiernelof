/**
 * Created by marie stiernelof on 11/15/13 Assignment: Expressions - Personal.
 */
//commit 15
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
//Prompting the value for how much the surgery would cost.
//parseInt to make sure value entered is a number

var wagePerWeek = hoursPerWeek * wagePerHour;
//calculating how much you would be paid in a week by multiplying hours per week by wage per hour
var weeksUntilGoal = surgeryCost / wagePerWeek;
//dividing the cost of surgery with the amount you would be paid in a week to see how many weeks
// you would have to work to reach that goal

//What if my oh so generous parents pitched in $100
var newResult = (surgeryCost - 100) / wagePerWeek;
//Calculates cost of surgery minus generous parental donation divided by amount you would be paid in a week
//to see how many weeks it would take to reach monetary goal