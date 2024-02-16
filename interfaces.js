var IRAN = { name: "Iran", capital: "Tehran", population: 87.92 };
var mySelf = { ID: 1234, name: "amirmohammad", age: 23 };
var mySelf2 = { ID: 124, name: "amirmohammad" };
//how we add a method to an interface
//in the objects :
var methodInObjects = /** @class */ (function () {
    function methodInObjects() {
    }
    methodInObjects.prototype.greet = function () {
        console.log("hello i am in class");
    };
    return methodInObjects;
}());
var MII = {
    hi: function () {
        console.log("Hello guys!");
    },
};
var testParamter = {
    name: "amirmohammad",
    greet: function (name) {
        return "hello ".concat(name);
    },
};
var TestReopening = { name: "test", age: 12 };
var mycat = {
    breed: "asian",
    color: "white",
    gender: "female",
};
