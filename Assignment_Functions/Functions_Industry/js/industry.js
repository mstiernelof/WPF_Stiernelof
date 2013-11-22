/**
 * Created by marie stiernelof on 11/21/13. Assignment Functions: Industry
 */

//    create code that calculates a result.
//    Decide what your code will calculate.
//    Info should be collected from the user with prompts
//    Calculate the result using the variables in an expression (NOT the literal values or numbers)
//    result should appear in the browser's console. (Remember to include units) This should explain the result as well.
//    Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.

// Each of the following requirements must exist in at least one of the 3 subprojects:
//    1. A ternary, 2. An else if, 3. An anonymous function
//    4. A normal "named" function, 5. An expression with two arithmetic operators
//    6. A function with three parameters, 7. At least one logical operator

//commits 5
// Comparing wages earned with 2 friends who also work in retail

var calculateSalary = function (name, hoursWorked, payPerHour){ //Wrote function to calculate salary. Stated relevant variable for figuring out salary
    var totalSalary = hoursWorked  * payPerHour; //Expression that will calculate salary by multiplying hours worked by how much a person gets paid in an hour
    console.log(name+"'s makes $"+totalSalary+" in a week.");//showing result of calculation with proper descriptive words so it's not just the salary number
}

calculateSalary ("Marie", 25, 9); //Will show how much I make
calculateSalary ("Jen", 40, 8); //Will show how much friend Jen makes
calculateSalary ("Jessica", 23, 10); //Will show how much friend Jessica makes