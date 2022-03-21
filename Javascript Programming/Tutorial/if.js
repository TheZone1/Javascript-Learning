function testEqual(num) {
    if (num == 10) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

function testLogicalOr (val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside"
}

console.log(testLogicalOr(22));

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5.";
    } else if (val < 10) {
        return "Greater than 5.";
    } else {
        return "Greater than or equal to ten.";
    }
}

console.log(orderMyLogic(12));