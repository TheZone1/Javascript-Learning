// Objects
var fruits = ["Apples", "Oranges", "Bananas"];
var person = {
    name: "Mike",
    age: 23,
    isMale: true,
    occupation: "Programmer",
    printName: function(){
        console.log(`Hello ${this.name}.`)
    }
};

var phrase = "Strings are cool";
console.log(phrase.length);

console.log(typeof(person));
console.log(person.age);
person.printName();

// Global objects
var myMovie = {
    title: "Social Network",
    releaseYear: 2010,
    duration: 2.0,
    actors: [
        {
            name: "Jesse Eisenberg",
            birthday: new Date("October 5, 1983"),
            hometown: "New York, New York"
        },
        {
            name: "Rooney Mora",
            birthday: new Date("April 17, 1985"),
            hometown: "Bedford, New York"
        }  
    ]
};

console.log(myMovie.title);
console.log(myMovie.actors);
console.log(myMovie.actors[0].name);

