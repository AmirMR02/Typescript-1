//what is Generic?
//a feature that allow us write reusable function
//in a simple word: we can use a function in multipile way in mutipile situation
//an simple function that we saw before :
const OldG: Array<number> = [1, 2, 3];

//this is my first generic :
function polymorphism<T>(item: T): T {
  return item;
}

//we can call anyhing ti this function , no matter what type!
polymorphism<string>("Hello");
polymorphism("Hello"); //we can leave <T> with nothing and TS will know that automatically
polymorphism(12);
polymorphism(true);
//there is no error when we call function with defferent type
//it works like for strings :
/**
 * function polymorpihsm<string>(item : string) : string {
 *             retur items //which is string
 * }
 */
