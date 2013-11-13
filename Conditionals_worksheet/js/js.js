/**
 * Created by Marie Stiernelof on 11/8/13 Conditionals Worksheet
 */


// Stuff your face I

var weight =parseInt(prompt("How much do you Weigh?"));  //Prompt competitor's Weight

if(weight >= 250){
    //If weight given is more than or equal to 250
    console.log("You qualify for the heavyweight division.")
}else{
    //If weight is less than 250
    console.log("Sorry, you don't qualify for the heavyweight division. Eat more pie... at home.")
}

////Group 1 Expressions with Conditionals
////Last Chance for Gas!

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

var username =prompt("Enter your username.");
var password =prompt("Enter your password.");
var correctUsername = "mstiernelof";
var correctPassword = "Yawl321";

if (username == correctUsername && password == correctPassword){
    console.log("Welcome, "+username+"!");
}
else if (username != correctUsername){
    console.log("User not found. Try again.");
}
else if (password != correctPassword){
    console.log("Password does not match our record.");
}

//Group 3: Multiple Conditions


var age = parseInt(prompt("How old are you?"));
var movieTime = parseInt(prompt("what time is your movie?"));

if (age > 54 || age < 10 || movieTime == 3 || movieTime == 4 || movieTime == 5){
    console.log("The ticket price is $7.00");
} else {
    console.log("The ticket price is $12.00");
}






