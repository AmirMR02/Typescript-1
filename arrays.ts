//a simple array definition in typesript
//in this example we define a array with some value(it can have pop and push)
const threeNumber: number[] = [1, 2, 3];

threeNumber.push(4);
threeNumber.pop();

//another array definition type
const threeNumbewr2: Array<number> = [1, 2, 3];

//making type Object and pass it to array
type thisType = {
  x: number;
  y: number;
};

let thisNumbers: Array<thisType> = [];
thisNumbers.push({ x: 1, y: 4 });

//EXERCISE
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "age":
//Asnwer
const age: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
//Answer
const gamesTable: string[][] = [[]];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Products type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type products = {
  name: string;
  price: number;
};
const testPr: Array<products> = [];
testPr.push({ name: "coffe mug", price: 11.5 });

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getAll that accepts an array of Product types
// It should return the sum of all the products' prices

function getAll(p: Array<products>) {
  return p.reduce((acc, i) => acc + i.price, 0);
}
const n = getAll([
  { name: "A", price: 20 },
  { name: "A", price: 20 },
  { name: "A", price: 60 },
]);
console.log(n); //will be 100
