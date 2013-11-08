/**
 * Created by mstiernelof on 11/6/13.
 */

//area of a trapezoid


//var base1 = 4
//
//var base2 = 6
//
//var height = 6
//
//var area = .5 * (base1 + base2) * height
//
//console.log(area)


//variable of

//var a;
//ass =prompt("What are your assets?");
//
//var l;
//lia =prompt("What are your liabilities?");
//
//var eCal = a - l
//
//var aCal = e + l
//
//var lCal = -1*(e-a)
//
//console.log("Your Equity is"); console.log(

//
//var list = ["eggs","toothpaste","Cat food","oatmeal"];
//
//listLength = list.length;
//
//console.log(listLength);
//
//list.push("kiwi");
//
//console.log(list.length);


var storedIfValue = 0;
var storedPromptValue = prompt("E(100%),G(75%),F(30%),P(0 for entire assignment)")
var percentageFromPrompt =0;
var percentageOfPoints = 10;

if(storedPromptValue.toUpperCase()=="E")
    {percentageFromPrompt=1;}
else if (storedPromptValue.toUpperCase()=="G")
    {percentageFromPrompt=.75;}
else if (storedPromptValue.toUpperCase()=="F")
    {percentageFromPrompt=.3;}
else {percentageFromPrompt=0;}

percentageOfPoints*=percentageFromPrompt;
console.log(percentageOfPoints);



































