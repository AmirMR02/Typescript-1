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
//now we can use all three property in this variable
var allDementions = {
    oneD: 1,
    twoD: 2,
    threeD: 3,
};
var Dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var Cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
function getProfitOfMovie(movie) {
    return movie.boxOffice.budget - movie.boxOffice.grossWorldwide;
}
var test = getProfitOfMovie(Cats);
console.log(test);
