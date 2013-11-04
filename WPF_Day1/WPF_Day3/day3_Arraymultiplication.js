/**
 * Created by mstiernelof on 11/1/13.
 */

//Creating a multiplication table

 var pro=parseInt(prompt("Give me an integer"));

var arrayLayerOne = [];
arrayLayerOne [0]=[];
arrayLayerOne [1]=[];
arrayLayerOne [2]=[];
arrayLayerOne [3]=[];

arrayLayerOne [0][0]=1;
arrayLayerOne [0][1]=2;
arrayLayerOne [0][2]=3;
arrayLayerOne [0][3]=4;

arrayLayerOne [1][0]=2;
arrayLayerOne [2][0]=3;
arrayLayerOne [3][0]=4;

arrayLayerOne [1][1]=arrayLayerOne[0][1]*arrayLayerOne[1][0]*pro;
arrayLayerOne [1][2]=arrayLayerOne[0][2]*arrayLayerOne[1][0]*pro;
arrayLayerOne [1][3]=arrayLayerOne[0][3]*arrayLayerOne[1][0]*pro;

arrayLayerOne [2][1]=arrayLayerOne[0][1]*arrayLayerOne[2][0]*pro;
arrayLayerOne [2][2]=arrayLayerOne[0][2]*arrayLayerOne[2][0]*pro;
arrayLayerOne [2][3]=arrayLayerOne[0][3]*arrayLayerOne[2][0]*pro;

arrayLayerOne [3][1]=arrayLayerOne[0][1]*arrayLayerOne[3][0]*pro;
arrayLayerOne [3][2]=arrayLayerOne[0][2]*arrayLayerOne[3][0]*pro;
arrayLayerOne [3][3]=arrayLayerOne[0][3]*arrayLayerOne[3][0]*pro;

arrayLayerOne[0][0] = arrayLayerOne[0][0]*pro;
arrayLayerOne[0][1] = arrayLayerOne[0][1]*pro;
arrayLayerOne[0][2] = arrayLayerOne[0][2]*pro;
arrayLayerOne[0][3] = arrayLayerOne[0][3]*pro;
arrayLayerOne[1][0] = arrayLayerOne[1][0]*pro;
arrayLayerOne[2][0] = arrayLayerOne[2][0]*pro;
arrayLayerOne[3][0] = arrayLayerOne[3][0]*pro;

console.log(arrayLayerOne[0]);
console.log(arrayLayerOne[1]);
console.log(arrayLayerOne[2]);
console.log(arrayLayerOne[3]);









