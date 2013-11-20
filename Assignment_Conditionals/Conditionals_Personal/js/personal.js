/**
 *  Created by marie stiernelof 11/13/13 Assignment: Conditionals
 */
//create code that calculates a result
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

//10 commits
//Do you want to make  peppermint hot cocoa mix? It makes an excellent christmas gift. How many jars would you like to make?

var makeCocoa =prompt("Do you want to make peppermint hot cocoa mix?");
//Asks the user if they want to make the hot cocoa mix and inputs response into variable

var jarNumber =parseInt(prompt("This makes an excellent christmas gift. How many jars of mix do you want to make?"));
//Asks user how many jars of mix they would like to make. ParseInt to make sure it's a number

var milk = 1 * jarNumber
var cocoa = 1 * jarNumber
var sugar = 1 * jarNumber
var salt = .5 * jarNumber
var chocoChips = .5 * jarNumber
var peppermint = .5 * jarNumber
//Ingredient list for one jars times the number of jars they want to make

if (makeCocoa=="yes"){  //Conditional statement if the want to make hot cocoa list ingredients needed
    console.log("Ingredients needed: "+milk+" c powdered milk, "+cocoa+" c unsweetened cocoa powder, "
    +sugar+" c sugar, "+salt+" tsp salt, "+chocoChips+" c miniature chocolate chips, "+peppermint
    +" c crushed peppermint candy"); //ingredient amount is based on the amount of jars you want to make
}
else if (makeCocoa==""){console.log("insufficient information. Yes or no it's not that hard.")//Validation. What happens if they don't enter anything.

}
else {console.log("Fine, don't make Peppermint Hot Cocoa. -_-  Grinch.");}
//If they answered anything other than yes they get the response Fine, don't make it. And ingredient list will not be shown.


