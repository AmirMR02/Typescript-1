//type narrowing means "check the type and then do something related woth that type"
//consider this code
// function TestSum(a : number | string , b : number) {
//     return a + b; //ERROR
// }
//in this example we have Error because of type "a"
//the compiler can't undrestand the type and
//typescript is confused to what to do!
//so we do this
function TestSum(a, b) {
    //we use 'typeof' gaurd for narrowing!
    if (typeof a === "number") {
        return a + b;
    }
    else {
        return "".concat(b, " ").concat(a);
    }
}
TestSum(10, 12); //accept
TestSum("ball", 12); //accept
//the second type narrowing is when we have a null or undefined value
function testItem(item) {
    if (!item) {
        throw new Error("there is nothing here!put something");
    }
    return "".concat(item, ", is what you said");
}
//equality function
//we also use === for typechecking
function EqualityFunction(x, y) {
    if (x === y) {
        x.toLowerCase();
        y.toLowerCase();
    }
    console.log(x, y);
    return "Final";
}
EqualityFunction("Test", "Function");
EqualityFunction(true, 12);
