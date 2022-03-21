var questions = [
    {
        prompt: "What color are apples.\n(a) Red/Green\n(b) Yellow\n(c) Brown",
        answer: "a"
    },
    {
        prompt: "What color are bananas.\n(a) Pink\n(b) Green\n(c) Yellow",
        answer: "c"
    },
    {
        prompt: "What color are strawberries.\n(a) Orange\n(b) Red\n(c) Yellow",
        answer: "b" 
    }
];

var score = 0;

for (i =0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

alert(`You got ${score}/${questions.length} correct!`);