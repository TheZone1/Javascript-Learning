//This is an array.

var myArray = ["Quincy", 1];
myArray.push("Aaron", 16);

console.log(myArray);

var ourArray = [
    ["John", 23],
    ["Cat", 2]
];

ourArray.push(["Dog", 3]);

console.log(ourArray);

/* pop - removes the last element from the list
   shift - removes the first element from the list
   push - add the element to the start of the list
   unshift - add the first element fromt the list */

console.log(ourArray.length);

var fruits = "Apples, Oranges, Peaches";
fruits = fruits.split(",");
console.log(fruits);
console.log(fruits[2]); // Ans: Peaches