//with tuples we can define constant length
var RGB = [1, 2, 3];
var TestHttpResponse = [200, "ok"];
//enums will help usto create constant values and use them all the time
var tooMuchName;
(function (tooMuchName) {
    tooMuchName[tooMuchName["muNymber"] = 1234568479846] = "muNymber";
})(tooMuchName || (tooMuchName = {}));
var a = tooMuchName.muNymber;
