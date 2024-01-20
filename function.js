//simple creating a function with a parameter with their type
function squareX(x) {
    return x * 2;
}
//void type : a type that doesn't return anything :
//* it can return 'undefined' type but
function sayHi() {
    console.log("helloooooooo github guy");
    //it can return this
    return undefined;
}
sayHi();
//Never type : a type that can't return ANYTHING!!
function saySomething() {
    while (true) {
        console.log("OMG , github has a git + hub");
    }
    //can't return undeifned
}
