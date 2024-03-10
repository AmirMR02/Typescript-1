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
function propertyCheck(item) {
    if ("mewo" in item) {
        console.log("cat was found in this object");
    }
    else {
        console.log("Ooops , this is a dog");
    }
}
var pet = { mewo: function () { return "mewo"; } };
propertyCheck(pet);
//instaceof :
//we use this operator for check if an Object extends from anoher object or not
function instanceofChecker(item) {
    if (item instanceof Date) {
        return "date : ".concat(item.toUTCString());
    }
    else {
        return "date is :".concat(new Date());
    }
}
console.log(instanceofChecker(new Date()));
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "MEowwwww";
    }
    else {
        animal;
        return "Bark";
    }
}
var testCat = {
    name: "jully",
    breed: "pitbul",
};
console.log(makeNoise(testCat));
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
var discriminatedUnions = {
    name: "name",
    weight: 52,
    age: 12,
};
var discriminatedUnions2 = {
    name: "cowy cowy",
    weight: 52,
    age: 12,
    kind: "cow",
};
function checkDiscriminated(animal) {
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
