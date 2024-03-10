//type narrowing means "check the type and then do something related woth that type"
//consider this code
// function TestSum(a : number | string , b : number) {
//     return a + b; //ERROR
// }

//in this example we have Error because of type "a"
//the compiler can't undrestand the type and
//typescript is confused to what to do!

//so we do this

function TestSum(a: number | string, b: number) {
  //we use 'typeof' gaurd for narrowing!
  if (typeof a === "number") {
    return a + b;
  } else {
    return `${b} ${a}`;
  }
}

TestSum(10, 12); //accept
TestSum("ball", 12); //accept

//the second type narrowing is when we have a null or undefined value
function testItem(item: string | null) {
  if (!item) {
    throw new Error("there is nothing here!put something");
  }
  return `${item}, is what you said`;
}

//equality function
//we also use === for typechecking
function EqualityFunction(x: boolean | string, y: string | number) {
  if (x === y) {
    x.toLowerCase();
    y.toLowerCase();
  }
  console.log(x, y);
  return "Final";
}

EqualityFunction("Test", "Function");
EqualityFunction(true, 12);

//using "in" operator:
//we use this operator for checking "if property X exist in an object or not";
type catObject = {
  mewo: () => void;
};

type dogObject = {
  bark: () => void;
};

function propertyCheck(item: catObject | dogObject) {
  if ("mewo" in item) {
    console.log("cat was found in this object");
  } else {
    console.log("Ooops , this is a dog");
  }
}

const pet: catObject = { mewo: () => "mewo" };
propertyCheck(pet);

//instaceof :
//we use this operator for check if an Object extends from anoher object or not

function instanceofChecker(item: Date | string) {
  if (item instanceof Date) {
    return `date : ${item.toUTCString()}`;
  } else {
    return `date is :${new Date()}`;
  }
}

console.log(instanceofChecker(new Date()));

//type predicates
interface cat2 {
  name: string;
  numLives: number;
}

interface dog2 {
  name: string;
  breed: string;
}

function isCat(animal: cat2 | dog2): animal is cat2 {
  return (animal as cat2).numLives !== undefined;
}

function makeNoise(animal: dog2 | cat2): string {
  if (isCat(animal)) {
    animal;
    return "MEowwwww";
  } else {
    animal;
    return "Bark";
  }
}

const testCat: dog2 = {
  name: "jully",
  breed: "pitbul",
};
console.log(makeNoise(testCat));

//Discriminated inions:
/**
 * consider we have two object that has common property and value in case:
 */
interface Cow {
  name: string;
  weight: number;
  age: number;
}

interface Rooster {
  name: string;
  weight: number;
  age: number;
}

/**
 * as we see in this example , they are the same so
 * how can we recognise which one is our object .
 * see this code :
 *       const a : Cow | Rooster;
 *        if(a.weight) {
 *                      //do sometinhg
 *                }
 * the problem is typescript can not decide how to do that so we have to use
 * something like switchcase for that
 */

const discriminatedUnions: Cow | Rooster = {
  name: "name",
  weight: 52,
  age: 12,
};

/**but there is another problem
 * we can't still know which is "Cow" or "Rooster"
 * we have to paste a special value and property to all these objects that has common properties
 * then we mae a function for doing the switch case for it
 */
interface Cow2 {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Rooster2 {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

const discriminatedUnions2: Cow2 | Rooster2 = {
  name: "cowy cowy",
  weight: 52,
  age: 12,
  kind: "cow",
};

function checkDiscriminated(animal: Cow2 | Rooster2) {
  switch (animal.kind) {
    case "cow":
      console.log("this is a cow");
      break;
    case "rooster":
      console.log("rooster");
      break;
    default:
      console.log("Nothing was created");
      break;
  }
}

checkDiscriminated(discriminatedUnions2);
