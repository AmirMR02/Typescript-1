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
