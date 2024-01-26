//creating a  simple obejct in ts
let person: { name: string; age: number } = { name: "Amirmohammad", age: 22 };

//passsing object as function parameter
function singerMan(person: { name: string; age: number }) {
  console.log(`Hi ${person.name}, i know you are a singer`);
}

singerMan({ name: "amirM", age: 22 });

//creating a simple TYPE
type Human = {
  name: string;
  age: number;
  job: string;
};
//type is method that we can create any type with it!

const anotherHuman: Human = {
  name: "amirmohammad",
  age: 22,
  job: "student",
};

//creating nested object
type Restuarnt = {
  name: string;
  status: "open" | "close";
  workers: {
    name: string[];
    workExperience: number[];
    positoins: string;
  };
};

const r1: Restuarnt = {
  name: "Jack and Jin",
  status: "open",
  workers: {
    name: ["alice", "jones"],
    workExperience: [2, 3],
    positoins: "Butler",
  },
};

//using 2 type togather
type simpleDemention = {
  oneD: number;
  twoD: number;
};

type anotherDemention = {
  threeD: number;
};
//now we can use all three property in this variable
const allDementions: simpleDemention & anotherDemention = {
  oneD: 1,
  twoD: 2,
  threeD: 3,
};

//EXERCISE
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movies = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};
const Dune: Movies = {
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

const Cats: Movies = {
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
function getProfitOfMovie(movie: Movies): number {
  return movie.boxOffice.budget - movie.boxOffice.grossWorldwide;
}
const test = getProfitOfMovie(Cats);
console.log(test);
