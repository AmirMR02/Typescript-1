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
