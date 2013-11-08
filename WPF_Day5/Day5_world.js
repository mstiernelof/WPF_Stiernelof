/**
 * Created by mstiernelof on 11/6/13.
 */


//Build World With Random land types

//Build a world array to contain our world or random land types (outer loop, inner loop)

var world=[];

for(outer=0;outer<10;outer++){world[outer]=[];
   for(inner=0;inner<10;inner++){
       //choose between 4 random land types
       var landSelection = Math.ceil(4*Math.random());
        if(landSelection==1){world[outer][inner]="Swamp   ";}
        else if(landSelection==2){world[outer][inner]="Desert  ";}
        else if(landSelection==3){world[outer][inner]="Mountain";}
        else (world[outer][inner]="Forest  ");

   }

    console.log(world[outer]);

}














