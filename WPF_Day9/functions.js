/**
 * Created by mstiernelof on 11/15/13.
 */
//Building a world in a 10x10 array, with random land types.
//build a world array to contain our world of random land types.


function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
        world[o]=[];
        for(i=0;i<10;i++){
            //I want to choose between 4 random land types
            var landSelection = Math.ceil(4*Math.random());
            if(landSelection==1){world[o][i]='Swamp';}
            else if(landSelection==2){world[o][i]='Desert';}
            else if(landSelection==3){world[o][i]='Mountain';}
            else (world[o][i]='Forest');

        }
    }

    return world;

}


function worldDisplay(worldArray,xyz,yyy,charName){
    console.clear();
    //input world array from the creation
    //Make this into a formatted grid with even spacing

    charName = '*'+charName.substring(0,6).toUpperCase()+'* ';
    for (i=charName.length;i<=8;i++){charName +=' ';}

    var formattedResult='';
    for(i=0;i<worldArray.length;i++){
        for(j=0;j<worldArray[i].length;j++)
        {
            if(i==yyy && j==xyz){formattedResult+=charName}
            else{
            formattedResult+= worldArray[i][j] +' ';
            if(worldArray[i][j].length==0){formattedResult+='        '}
            if(worldArray[i][j].length==1){formattedResult+='       '}
            if(worldArray[i][j].length==2){formattedResult+='      '}
            if(worldArray[i][j].length==3){formattedResult+='     '}
            if(worldArray[i][j].length==4){formattedResult+='    '}
            if(worldArray[i][j].length==5){formattedResult+='   '}
            if(worldArray[i][j].length==6){formattedResult+='  '}
            if(worldArray[i][j].length==7){formattedResult+=' '}
        }   }
        formattedResult+='\n';
    }


    return formattedResult;

    //output the formatted version of the world array
}

//Using do while to dynamically move around your world

var world1= createWorld();

console.log(worldDisplay(world1));

console.log(world1[1][1]);

var quitTest = true;

var x=1;
var y=1;

charName = prompt('What is you character name?');

do{//do this stuff

    var userInput=prompt('Which direction would you like to move? (N,S,E,W,Q)');
//static version
if(userInput=='N'){console.log(world1[0][1]);}
else if (userInput=='S'){console.log(world1[2][1]);}
else if (userInput=='E'){console.log(world1[1][0]);}
else if (userInput=='W'){console.log(world1[1][2]);}

//dynamic version
//    if(userInput==null{})
//    if(userInput.toUpperCase()=='N'){y--;}
//    else{
//    if(userInput.toUpperCase()=='S'){y++;}
//    if(userInput.toUpperCase()=='W'){x--;}
//    if(userInput.toUpperCase()=='E'){x++;}
//    if(userInput.toUpperCase()=='Q'){quitTest=false}
//    if(x<0){x=9}//can't go past 10x10 world, this is saying if you try to go beyond this you end up back at the start
//    if(x>9){x=0}
//    if(y<0){y=9}
//    if(y>9){y=0}
//
//    console.log(world1[y][x]);
//    }
//}   while(quitTest); //this is true