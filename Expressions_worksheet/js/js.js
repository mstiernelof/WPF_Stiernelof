/**
 * Marie Stiernelof 11/3/13 Expressions Practice Worksheet
 */

//Problem #1 Dog Years

var sparkyAge = 3; //Sparky's Age

dogYears = sparkyAge * 7; //Formula to find Sparky's age in dog years

console.log("Sparky is "+sparkyAge+" which is "+dogYears+" in dog years."); //Show age in dog years



//Problem #2 Slice of Pie Part 1

var slicePerPizza = 8 //Slices per pizza

var people = 13 //People ready to eat

var pizzas = 2 //Number of Pizzas

slicePerPerson = (slicePerPizza * pizzas / people); //Formula to find out how many slices each person will get

console.log("Each person gets "+slicePerPerson+" slice pizza.") //Show result



//Problem #3 Slice of Pie Part 2


newSlicePerPerson = Math.floor(slicePerPizza * pizzas/people);// How many whole slices each person gets.

sparkySlices = pizzas * slicePerPizza - (newSlicePerPerson * people)  //How many slices Sparky will get

console.log("If each person gets "+newSlicePerPerson+" then Sparky would get "+sparkySlices+" slices pizza.") //Show result

//Problem #4 Average Shopping Bill

var amountSpent = [88,200,150,113,127]; //Amounts spent in past 5 weeks

var total = 0;

for (var i=0; i< amountSpent.length; i++){ //Using loop to add up
    total = total + amountSpent[i]
}

averageSpent = total/5

console.log("The total amount spent on groceries was $"+total+". That is an average of $"+averageSpent+" per week."); //show total result

//Problem #5 Discounts

var originalPrice = 50; //Original Price
var discountPer = 30; //Discount of 30%
var salesTax = .065; //Sales tax 6.5% as a decimal
var item = "shoes"; //Item

discountPrice = originalPrice - originalPrice * (discountPer/100); //calculate the discount cost of item
totalCost = discountPrice + (discountPrice * salesTax); //calculate total cost of item (tax included)

console.log("Your "+item+" were originally $"+originalPrice+", but after a "+discountPer+"% discount, " +
    "they are now $"+discountPrice+" without tax, and $"+totalCost+' with tax.'); //Show result



