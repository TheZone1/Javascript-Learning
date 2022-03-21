function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}.`

    return result;
}

//Call the function
console.log(wordBlanks("dog", "big", "ran", "slowly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));