/**
 * Created by marie stiernelof on 11/21/13. Assignment Functions : Personal
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

//commits 6

//Today's weather/Should I wear outerwear?

var temp = prompt("What's the temperature outside?"); //Ask user what the temperature is outside

var todaysWeather = function (temp){ //Naming function and setting the parameter as a temperature
    if (temp<=50 && temp>=1){console.log("Yes, wear a winter coat. It's freaking cold!");} //if less than 50 tell user to wear a coat
    if (temp<=65 && temp>=51){console.log("Yes, wear a coat. It's cold");} //if between 51 and 65 tell user to wear a coat
    if (temp>=66 && temp<=69){console.log("Yes, wear a lighter coat it's chilly.");} //if between 66 and 69 tell user to wear light coat
    if (temp>=70 && temp<=75){console.log("Wear a cardigan there may be a slight chill outside.");} //if between 70 and 75 tell user to wear cardigan
    if (temp>=76 && temp<=84){console.log("The weather is nice, don't worry about bringing a sweater.");} //if between 76 and 84 tell user to not wear coat
    if (temp>=85){console.log("It's freaking hot. Why would you wear a coat?!");} //if 85 emphatically tell them not to wear coat
    else if (temp==""){console.log("You entered nothing. Try again.");} //if no temp entered let them know they made a mistake
}

todaysWeather(temp); //calling on function