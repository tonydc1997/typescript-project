var sumOfTwoNumbers = function (a, b) {
    return a + b;
};
var answer = sumOfTwoNumbers(9, 9);
console.log(answer);
// TYPES IN TYPESCRIPT
// Boolean
var enteringFlowState = true;
// Number 
var someonesAge = 42;
// String
var person = 'Elon Musk';
var favQuote = "I'd rather be optimistic and wrong than pessimistic and right - " + person;
// Array
var pets = ['dogs', 'cats', 'birds', 'reptiles'];
var interestingPets = ['dragons', 'sharks', 'monkeys'];
// Objects
var wizard = {
    name: 'Oz',
    power: 'Over 9,000!'
};
// Null and Undefined
var woops = undefined;
var invalid = null;
// Tuple 
var orderedSequence;
orderedSequence = ['fingers', 3];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeOfHands = Size[3];
var sizeOfFeet = Size.Medium;
// Any - BE VERY CAUTIOUS !!!
var whatever = "gibberish";
// Void
var sing = function () {
    console.log('Sing Sing Sing!');
};
// Never 
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight!');
};
// ^^This ^^ is the same as writing the function below.
var fightRobotArmyRound2 = function (robots) {
    console.log('Fight!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy2 = function (robots) {
    console.log('Fight!');
};
var fightRobotArmyRound3 = function (robots) {
    return 17;
};
