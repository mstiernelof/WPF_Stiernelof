/**
 * Marie Stiernelof 11/3/13 Expressions Practice Worksheet
 */
//Instructions For each solution you will need the following:
//Label the section of code appropriately with comments
//Write the givens as appropriately named variables or constants.
//Declare a variable for your result.
//Use the variables to calculate the result (NOT the literal values or numbers)
//Calculate the result using the variables in an expression
//Assign the calculation to the resulting variable.
//Make sure to print the result in the console (Remember to include units like “feet” and “slices of pizza”)
//Comment every line of code (describe what each line is doing in English)
//Don't forget!
//Test your code! Do the calculations on your own calculator. Check that the computer is producing the same result.
//    Commit often!
//A "given" is a variable that is part of the initial set up of a formula. You should write your code so anyone can change the values of the givens and the result of the calculation should still be accurate.

//Problem #1 Dog Years

var sparkyAge = 3; //Sparky's Age

dogYears = sparkyAge * 7; //Formula to find Sparky's age in dog years

console.log("Sparky is "+sparkyAge+" which is "+dogYears+" in dog years."); //Show age in dog years



//Problem #2 Slice of Pie Part 1

var slicePerPizza = 8 //Slices per pizza

var people = 13 //People ready to eat

var pizzas = 2 //Number of Pizzas

slicePerPerson = (slicePerPizza * pizzas / people); //Formula to find out how many slices each person will get

console.log("Each person gets "+slicePerPerson+" slice pizza.") //Show result



//Problem #3 Slice of Pie Part 2


newSlicePerPerson = Math.floor(slicePerPizza * pizzas/people);// How many whole slices each person gets.

sparkySlices = pizzas * slicePerPizza - (newSlicePerPerson * people)  //How many slices Sparky will get

console.log("If each person gets "+newSlicePerPerson+" then Sparky would get "+sparkySlices+" slices pizza.") //Show result

//Problem #4 Average Shopping Bill









//Problem #5 Discounts





