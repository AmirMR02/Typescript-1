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
