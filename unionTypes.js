//union type is a type that can be two or more type
var twoT;
twoT = 2; //accept
twoT = "2"; //accept
//it can 2 property of each object
var cp;
cp = { x: 2, y: 3 };
cp = { lat: 2312, long: 344 };
//union types in function
function printSomething(n) {
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
function calculateTaxForYou(money, tax) {
    if (typeof money === "string") {
        money = parseFloat(money.replace("$", "")); //if money = $23 ==> 23
    }
    return money * tax;
}
calculateTaxForYou("$23", 1.45); //correct
calculateTaxForYou(23, 1.45); //correct
//constant lentgh of union type
var conslength;
conslength = "a"; // accept
//conslength = "f"; //Error : f is not a value in union types in conslentgh;length
