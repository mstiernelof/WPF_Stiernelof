/**
 * Created by mstiernelof on 11/1/13.
 */

//Arrays of Arrays

var arrayLayerOne = [];
arrayLayerOne[0]=[];
arrayLayerOne[1]=[];
arrayLayerOne[2]=[];

arrayLayerOne[0][0]="Dog";
arrayLayerOne[0][1]="Cat";
arrayLayerOne[0][2]="Bird";

arrayLayerOne[1][0]=1;
arrayLayerOne[1][1]=10;
arrayLayerOne[1][2]=908277.28827;

arrayLayerOne[2][0]=["Dog","Monkey"];
arrayLayerOne[2][1]=["Cat","Dolphin"];
arrayLayerOne[2][2]=["Bird","Whale"];

console.log(arrayLayerOne[0][0]);
console.log(arrayLayerOne[2][0]);
console.log(arrayLayerOne[2][0][0]);



//Correct way
//var triangle = [];
//triangle[0]=Number(prompt("base?"));
//triangle[1]=Number(prompt("base?"));
//triangle[2]=Math.sqrt(triangle[0]*triangle[0]
  //  +triangle[1]*triangle[1]);





