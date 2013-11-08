/**
 * Created by mstiernelof on 11/8/13.
 */

//functions

//inputs are 2 of 3 values

//output is to calculate the third value

var global_a =prompt("A value");
var global_b =prompt("B Value");
var global_c =prompt("C Value");


function pythagorean (a,b,c){
 if((a==null && b==null && c==null) ||
     (a==null && b==null && c!=null) ||
     (a==null && b!=null && c==null) ||
     (a!=null && b==null && c==null)

     )

 {
     return "You haven't entered enough data";
 } else if (a!=null && b!==null && c==null){
     return Math.sqrt(a*a+b*b);
 } else if(a!=null && b==null && c!=null){
        return Math.sqrt(c*c-a*a);
    } else if(a==null && b!=null && c!=null){
     return Math.sqrt(c*c-b*b);
 } else{
     if(Math.sqrt(a*a+b*b)==c){return "This is a good set of data"
 }

}

console.log(pythagorean(null,null,null));
console.log(pythagorean(1,null,null));
console.log(pythagorean(null,1,null));
console.log(pythagorean(null,null,1));
console.log(pythagorean(3,4,null));
console.log(pythagorean(3,null,5));
console.log(pythagorean(null,4,5));
console.log(pythagorean(3,4,5));
console.log(pythagorean(3,4,6));
console.log(pythagorean(
    parseInt(prompt("Value for A")),
    parseInt(prompt("Value for B")),
    parseInt(prompt("Value for C")
    ));

if(pythagorean(null,null,null)==
"You haven't entered enough data")
{console.log('(null, null, null) --Passed all null)
}
    else{console.log("Failed")}





