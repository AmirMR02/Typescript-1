//creating a  simple obejct in ts
let person: { name: string; age: number } = { name: "Amirmohammad", age: 22 };

//passsing object as function parameter
function singerMan(person: { name: string; age: number }) {
  console.log(`Hi ${person.name}, i know you are a singer`);
}

singerMan({ name: "amirM", age: 22 });
