//a simple array definition in typesript
//in this example we define a array with some value(it can have pop and push)
var threeNumber = [1, 2, 3];
threeNumber.push(4);
threeNumber.pop();
//another array definition type
var threeNumbewr2 = [1, 2, 3];
var thisNumbers = [];
thisNumbers.push({ x: 1, y: 4 });
//EXERCISE
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "age":
//Asnwer
var age = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
//Answer
var gamesTable = [[]];
var testPr = [];
testPr.push({ name: "coffe mug", price: 11.5 });
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getAll that accepts an array of Product types
// It should return the sum of all the products' prices
function getAll(p) {
    return p.reduce(function (acc, i) { return acc + i.price; }, 0);
}
var n = getAll([
    { name: "A", price: 20 },
    { name: "A", price: 20 },
    { name: "A", price: 60 },
]);
console.log(n); //will be 100
