const countries = ["Finland", "Sweden", "Norway"];
//create an empty set
let newset = new Set();
//set contains 0 to 10
for (let i = 0; i < 11; i++) {
  newset.add(i);
}
console.log(newset);
//remove an element from the set
newset.delete(7);
console.log(newset);

//clear a set
newset.clear();
console.log(newset);

//create a seet of 5 string elements from array
let an = ["Welcome", "Hello", "Good Morning", "Thanks", "Good Night"];
let setnew = new Set(an);

//Create a map of countries and their characters
countriesList = [
  ["India", 5],
  ["Sweden", 6],
  ["America", 7],
];
let countriesMap = new Map(countriesList);

let a = [4, 5, 6, 7];
let b = [3, 9, 0, 8];

a = new Set(a);
b = new Set(b);

//Union of sets
let union = new Set(...a, ...b);
console.log(union);
//Intersection of sets
let intersect = new Set([...a].filter((i) => b.has(i)));
console.log(intersection);
