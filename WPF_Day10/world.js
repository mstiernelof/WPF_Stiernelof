/**
 * Created by mstiernelof on 11/18/13.
 */
//Building a world in a 10x10 array, with random land types.

//build a world array to contain our world of random land types.


function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
        world[o]=[];
        for(i=0;i<10;i++){
            //I want to choose between 4 random land types
            var landName = 0;
            var monsterList =1;
            var landSelection = Math.ceil(4*Math.random());
            world[o][i]=[];
            if(landSelection==1){world[o][i][landName]='Swamp';}
            else if(landSelection==2){world[o][i][landName]='Desert';}
            else if(landSelection==3){world[o][i][landName]='Mountain';}
            else (world[o][i][landName]='Forest');
            world[o][i][monsterList] = monsterGen(world[o][i][landName]);
        }
    }
    return world;
}

function monsterGen(landType){
    //create an array of monsters for our world.
    //select monsters appropriate for our land type.
    //condition to check land types
    //randomly assign monsters to each land location
    var randomEvent=Math.random();
    var monsterArray=[];
    if(landType=='forest'){
        //bugbears (50), kobolds (40), dragons (10)
        if(randomEvent<.25){
            if(randomEvent<.125){
                monsterArray[0]='Bugbears'
            } else if(randomEvent<.225){
                monsterArray[0]='kobolds'
            } else {monsterArray[0]='dragons'}

        }
    }
return monsterArray;
}
//Treasure Generation

function treasureGen(monsterName){
    var treasure = [];
    var treasureType = Math.random();
    var treasureAmount = Math.random();
    var minGold = 0;
    var maxGold = 0;
    var minGems = 0;
    var maxGems = 0;
    var minWeapons = 0;
    var maxWeapons = 0;

    if (monsterName){
        minGold = 1;
        maxGold = 1000;
        minGems = 1;
        maxGems = 4;
        minWeapons = 1;
        maxWeapons = 1;
    }
    //Chance you will get gold, and/or gems, and/or weapons
    //10% gold, 5% others, else null
    if (treasureType<=.1){} //gold
    else  if (treasureType<=.15){} //gems
    else  if (treasureType<=.2){} //weapons
    else  if (treasureType<=.25){} //gold, gems
    else  if (treasureType<=.30){} //gold weapons
    else  if (treasureType<=.35){} //weapons gems
    else  if (treasureType<=.40){} //gold weapons gems
    else {treasure[0]="You got nothing!"} //nothing

    return treasure;
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
            if(i==yyy &&j==xyz){ formattedResult+=charName}
            else{
                formattedResult+= worldArray[i][j] +' ';
                if(worldArray[i][j][0].length==0){formattedResult+='        '}
                if(worldArray[i][j][0].length==1){formattedResult+='       '}
                if(worldArray[i][j][0].length==2){formattedResult+='      '}
                if(worldArray[i][j][0].length==3){formattedResult+='     '}
                if(worldArray[i][j][0].length==4){formattedResult+='    '}
                if(worldArray[i][j][0].length==5){formattedResult+='   '}
                if(worldArray[i][j][0].length==6){formattedResult+='  '}
                if(worldArray[i][j][0].length==7){formattedResult+=' '}
            }        }
        formattedResult+='\n';
    }
    return formattedResult;

    //output the formatted version of the world array
}


var world1= createWorld();



var quitTest = true;
var x=1;
var y=1;
charName = prompt('What is you character name?');

console.log(worldDisplay(world1,x,y,charName));
do
{//do this stuff
    var userInput=prompt('Which direction would you like to move? (N,S,E,W,Q)');

    if(userInput==null){quitTest=false;
        break;}
    if(userInput.toUpperCase()=='Q'){quitTest=false;}
    else {
        if(userInput.toUpperCase()=='N'){y--;}
        if(userInput.toUpperCase()=='S'){y++;}
        if(userInput.toUpperCase()=='W'){x--;}
        if(userInput.toUpperCase()=='E'){x++;}
        if(x<0){x=9;}
        if(x>9){x=0;}
        if(y<0){y=9;}
        if(y>9){y=0;}
        console.log(worldDisplay(world1,x,y,charName));
    }
}  while(quitTest);  //this is true

