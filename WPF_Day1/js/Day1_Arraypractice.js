/**
 * Created by mstiernelof on 10/30/13.
 */


//My wrong attempt triangle
//var a
//a =prompt("What is the length of side a?");

//var b
//b =prompt("What is the length of side b?");

//var c
//c =(Math.sqrt((a*a)+(b*b)));

//var triangleArray =[a,b,c];
//console.log(triangleArray);
//console.log(Math.sqrt((a*a)+(b*b)));



//Correct way
var triangle = [];
triangle[0]=Number(prompt("base?"));
triangle[1]=Number(prompt("base?"));
triangle[2]=Math.sqrt(triangle[0]*triangle[0]
    +triangle[1]*triangle[1]);

console.log(triangle);
