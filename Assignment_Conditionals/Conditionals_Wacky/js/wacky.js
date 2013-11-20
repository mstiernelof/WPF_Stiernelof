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

//8 commits
//Spanish Greetings

var time =prompt("What time of day is it: Morning, afternoon or night?");
//Prompt for what time of day it is
var context =prompt("Casual or formal?");
//Prompt to find out if situation is formal or casual

if (time=="morning" && context=="casual"){ //If morning and casual response
    console.log("Good Day in Spanish = Buenos dias."); //Then console log this greeting
    console.log("How are you in informal Spanish = Cómo estas?");//and this informal question
}
if (time=="morning" && context=="formal"){ //If morning and formal response
    console.log("Good Day in Spanish = Buenos dias."); //Then console log this greeting
    console.log("How are you in formal Spanish = Cómo esta usted?");//and this formal question
}

if (time=="afternoon" && context=="casual"){ //If afternoon and casual response
    console.log("Good Afternoon in Spanish = Buenas Tardes."); //Then console log this greeting
    console.log("How are you in informal Spanish = Cómo estas?");//and this informal question
}

if (time=="afternoon" && context=="formal" ){ //If afternoon and formal response
    console.log("Good Afternoon in Spanish = Buenas Tardes."); //Then console log this greeting
    console.log("How are you in formal Spanish = Cómo esta usted?");//and this formal question
}

if (time=="night" && context=="casual"){ //If night and casual response
    console.log("Good Evening in Spanish = Buenas Noches."); //Then console log this greeting
    console.log("How are you in informal Spanish = Cómo estas?");//and this informal question
}

if (time=="night" && context=="formal"){ //If night and formal response
    console.log("Good Evening in Spanish = Buenas Noches."); //Then console log this greeting
    console.log("How are you in formal Spanish = Cómo esta usted?");//and this formal question
}
//Validation
else if (time=="" || context==""){ //if time question or context question is left blank
    console.log("That response does not fit any of the options given. Please refresh and try again."); //Return this response
}