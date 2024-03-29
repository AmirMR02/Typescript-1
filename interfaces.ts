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

//how we add a method to an interface
//in the objects :
class methodInObjects {
  greet(): void {
    console.log("hello i am in class");
  }
}

//for interfaces we have to define the general method and then
//we will descripbe the codes for runnig in the function(method)
interface methodInInterface {
  hi(): void;
}
const MII: methodInInterface = {
  hi() {
    console.log("Hello guys!");
  },
};

//writting methods with parameter:
interface methodWithParameterInInterfaces {
  name: string;
  greet(name: string): string;
}

const testParamter: methodWithParameterInInterfaces = {
  name: "amirmohammad",
  greet(name: string) {
    return `hello ${name}`;
  },
};

//reopening interfaces :
// we can add other property or methods after our code again:
interface reopening {
  name: string;
}

//we add property here
interface reopening {
  age: number;
}

const TestReopening: reopening = { name: "test", age: 12 };

//we can extend an interface like we jabe in objects and classes
interface animal {
  breed: string;
  color: string;
}

interface animalWithGender extends animal {
  gender: "male" | "female";
}

const mycat: animalWithGender = {
  breed: "asian",
  color: "white",
  gender: "female",
};

//another example
interface Employee3 {
  name: string;
  Age: number;
  level: "New" | "Elder" | "Co-leader" | "Leader";
}

interface partTimeEmployee3 extends Employee3 {
  WorkHoursInWeek: number;
}

interface FullTimeEmployee3 extends Employee3 {
  WorkHoursInWeek: number;
}

const em1: partTimeEmployee3 = {
  name: "amirmohammad",
  Age: 22,
  level: "New",
  WorkHoursInWeek: 9,
};
