var friends = ["John", "Kaya", "Tom", "Joseph", "Orion", "Nedd"];

friends.forEach(friend => {
    console.log(friend)
});

var actors = [
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

actors.forEach(actor => {
    console.log(actor.name);
    console.log(actor.hometown);
});