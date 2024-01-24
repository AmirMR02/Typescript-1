//creating a  simple obejct in ts
var person = { name: "Amirmohammad", age: 22 };
//passsing object as function parameter
function singerMan(person) {
    console.log("Hi ".concat(person.name, ", i know you are a singer"));
}
singerMan({ name: "amirM", age: 22 });
//type is method that we can create any type with it!
var anotherHuman = {
    name: "amirmohammad",
    age: 22,
    job: "student",
};
var r1 = {
    name: "Jack and Jin",
    status: "open",
    workers: {
        name: ["alice", "jones"],
        workExperience: [2, 3],
        positoins: "Butler",
    },
};
