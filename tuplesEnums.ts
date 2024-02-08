//with tuples we can define constant length
const RGB: [number, number, number] = [1, 2, 3];

const TestHttpResponse: [number, string] = [200, "ok"];

//enums will help usto create constant values and use them all the time
enum tooMuchName {
  muNymber = 1234568479846,
}

const a = tooMuchName.muNymber;
