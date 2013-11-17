/**
 * Created by marie stiernelof on 11/15/13. Assignment:Expressions - Industry
 */
//commit 6
//math expression, 3 factors as variables (prompted) 3 arithmetic operators
//prompted value must parseInt
//console output include calculated values, supporting text, string concatenation
//one of each variable with meaningful names (1.array 2.string, 3.number)
//20 submits with meaningful comments

//Fashion Merchandising, Calculate the markup amount of a pair of designer jeans

//markup% = markup amount / retail price
// 300%=markup amount/$168

var retailPrice = parseInt(prompt("What is the retail price of those designer jeans?"));
//Prompted variable for the retail price of the jeans. parseInt to make sure its a number
var markupPercent = parseInt(prompt("What is the markup percent?"));
//Prompted variable for the mark-up percent. parseInt to make sure its a number

var markupDecimal = markupPercent / 100
//Convert mark-up % to a number that's easier to work with in an expression

var markupAmount = markupDecimal * retailPrice