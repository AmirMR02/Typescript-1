//union type is a type that can be two or more type
let twoT: string | number;
twoT = 2; //accept
twoT = "2"; //accept

//another example with combineing two type togather
type coord = {
  lat: number;
  long: number;
};

type points = {
  x: number;
  y: number;
};

//it can 2 property of each object
let cp: coord | points;

cp = { x: 2, y: 3 };
cp = { lat: 2312, long: 344 };

//union types in function
function printSomething(n: string | number): void {
  console.log(n);
}

printSomething("i will be compiled");
printSomething(1234);

/**
 * there is an issue in union types and that is when we want to accept 
 * a paramter in function with them , if we want to calculate it or doing
 * other operation , Typescript will complain about it
 * lets see this exzample
 * 
  function calculateTaxForYou(money : string | number,tax : number) {
      return money * tax
  }
  in this example money is not something that we can do the operation

  *so what is the solution?
  * it something we call it "TYPE NARROWING"
  * means check the type and then do the operation in these situations
 */
//solution :
function calculateTaxForYou(money: string | number, tax: number) {
  if (typeof money === "string") {
    money = parseFloat(money.replace("$", "")); //if money = $23 ==> 23
  }
  return money * tax;
}
calculateTaxForYou("$23", 1.45); //correct
calculateTaxForYou(23, 1.45); //correct

//constant lentgh of union type
let conslength: "a" | "b" | "c";
conslength = "a"; // accept
//conslength = "f"; //Error : f is not a value in union types in conslentgh;length

//EXERCISE
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff1: number[] | string[] = ["11"];
stuff1.push("22");
const stuff2: number[] | string[] = [1];
stuff2.push(2);
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
const test: SkiSchoolStudent = {
  name: "john",
  age: 12,
  sport: "ski",
  level: "Expert",
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type rgbColor = {
  r: number;
  g: number;
  b: number;
};

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type hslColor = {
  h: number;
  s: number;
  l: number;
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: rgbColor & hslColor = {
  r: 12213,
  h: 21342,
  g: 21312,
  s: 2312,
  b: 22,
  l: 2312,
};

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name: string | string[]): void {
  if (typeof name === "string") console.log(`Hello ${name}`);
  else name.map((el) => console.log(`Hello ${el}`));
}

greet("amirmohammad");
greet(["amirmohammad", "ali"]);
