/**
 * Created by mstiernelof on 11/11/13.
 */

//var myList="";
//for (i=1; i<100; i++){
//    //console.log(i % 3);
//    if (i%3==0){
//        myList = myList + i+", ";
//    }
//}
//
//console.log(myList);


//day trader
//string of numbers count the number of increases/decreases
//house numbers in array?
//loop to compare numbers
//numeric bounds 1-3
//create a random string of numbers

var numberList =[];
var storageString =" ";
var storageCounter = 0;

for (i=0; i<20; i++){
    numberList[i]=(Math.floor(Math.random()*3)+1);
    if(i>0 && numberList[i-1] > numberList[i]){
    storageString += numberList[i];
    storageCounter++;

    } else {
        storageString +=" , "
    }
}
console.log(numberList);
console.log(storageString);




