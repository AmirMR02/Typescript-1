//union type is a type that can be two or more type
let twoT: string | number;
twoT = 2; //accept
twoT = "2"; //accept

//another example with combineing two type togather
type coord = {
  lat: number;
  long: number;
};

type points = {
  x: number;
  y: number;
};

//it can 2 property of each object
let cp: coord | points;

cp = { x: 2, y: 3 };
cp = { lat: 2312, long: 344 };
