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

//having mutipile type n generics
function mergeThese<T1, T2>(obj1: T1, obj2: T2) {
  return {
    ...obj1,
    ...obj2,
  };
}

mergeThese({ name: "amir" }, 2);

//if we look at top example we will see there is a little bug :
//we can call function like this:
mergeThese({ name: "amir" }, 12);
//but we want to accept just object!
//for solve this problem :
function mergeThese2<T1 extends Object, T2 extends Object>(obj1: T1, obj2: T2) {
  return {
    ...obj1,
    ...obj2,
  };
}
mergeThese2({ name: "amir" }, { age: 22 });
// mergeThese2({ name: "amir" }, 2); //ERROR for this example
