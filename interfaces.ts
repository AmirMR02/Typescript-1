//interfaces are a type for objects
/**in old way we create types for them
 * type person = { name : string, age : number }
 * now we use interface for objects
 */
interface Country {
  name: string;
  capital: string;
  population: number;
}

const IRAN: Country = { name: "Iran", capital: "Tehran", population: 87.92 };

//we can have readonly property in objects so we can have this on interfaces

interface Employee {
  readonly ID: number;
  name: string;
  age: number;
}

const mySelf: Employee = { ID: 1234, name: "amirmohammad", age: 23 };
//trying change ID
// mySelf.ID = 1; //Error

//we can have optional property :
interface Employee2 {
  readonly ID: number;
  name: string;
  age?: number;
}

const mySelf2: Employee2 = { ID: 124, name: "amirmohammad" };
