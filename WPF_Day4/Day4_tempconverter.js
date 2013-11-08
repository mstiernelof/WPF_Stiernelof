/**
 * Created by mstiernelof on 11/4/13.
 */


var choice =prompt("Celsius to Fahrenheit or Fahrenheit to Celsius?");

var tempToConvert =prompt("What is the temperature you would like to convert?");

if (choice=="Celsius to Fahrenheit"){
    console.log(tempToConvert * (9/5) + 32);
} else {console.log((tempToConvert-32)*(5/9));}









