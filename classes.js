//in here we will review class in js and then will do class in typescript
//we define a class like this :
class ImClass {
  p1;
  p2;
}

//qnother goof example in js world
class Home {
  meter;
  doors;
  windows;
  rooms;
  floor;
}

//let's make a home
const myHome = new Home();
myHome.meter = 75;
myHome.doors = 1;
myHome.windows = 4;
myHome.rooms = 2;
myHome.floor = 1;

//constructors : they will run after an object create;
class square {
  constructor() {
    console.log("a square created");
  }
  width;
  height;
}

const s1 = new square();

//class fileds
//these just simple properties that are not even method and will declare out
//of cinstructors ,and we can use them

class game {
  name;
  level;
  difficulty;

  constrctor() {
    console.log("we create a game");
  }

  hi() {
    console.log("welcome to our game");
  }
}

//,making a property private
class thisHasPrivate {
  #name;
}

// const a : thisHasPrivate = {#name : "Amir"}; //We Can't Change it;

//getter
class sayThisIsNotEnough {
  firstName;
  lastName;

  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const personOntheWay = new sayThisIsNotEnough();
personOntheWay.firstName = "Amir";
personOntheWay.lastName = "Rashvand";
personOntheWay.firstName();
//setter
//with setter with can set property
//* the point is we can like access an private property and setvalue to it
class sayThisIsNotEnough2 {
  #firstName = "no name";

  set settName(fn) {
    this.#firstName = fn;
  }
}

const personOntheWay2 = new sayThisIsNotEnough2();
personOntheWay.name = "amirmohammad";
