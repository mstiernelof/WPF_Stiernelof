/**
 * Created by mstiernelof on 11/18/13.
 */

//circle cylinder square cube cone
//in functions

function circle(r){
    return r*r*Math.PI;
}

function cylinder(areaCircle,h){
    return areaCircle*h;
}

function square(a){
    return a*a;
}

function cube(areaSquare){
    return areaSquare*6
}

function cone(r){
    return Math.PI*r*r
}

function sphere(r){
    return (4*Math.PI*r*r*r)/3
}

console.log(circle(10)); //?!

console.log(cylinder(circle(10),15)); //?!

console.log(square(5));

console.log(cube(square(5)));

console.log(cone(3));

console.log(sphere(3));


//stuff



















