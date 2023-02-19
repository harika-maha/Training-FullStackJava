const countries = ["Finland", "Sweden", "Norway"];
//forEach to console.log all elements of the array
countries.forEach((country) => console.log(country));
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
let b = [3, 4, 0, 7];

set1 = new Set(a);
set2 = new Set(b);
set3 = [...set1];
var newSet = new Set();
//Union of sets
set2.forEach((elem) => set1.add(elem));
console.log(set1);
//Intersection of sets
set2.forEach((elem) => {
  if (elem in set3) newSet.add(elem);
});
console.log(newSet);
