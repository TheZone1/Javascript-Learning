//I don't know what this code this but it's important to know.

for (i = 0; i < 3; i++) {
    for (j = 0; j < 2; j++) {
        console.log(`i = ${i}, j = ${j}`)
    }
}

//Print the number grid using for loop

var numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];

for (i = 0; i < numberGrid.length; i++) {
    for (j = 0; j < numberGrid[i].length; j++) {
        console.log(numberGrid[i][j]);
    }
}