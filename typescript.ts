const sumOfTwoNumbers = (a: number, b: number) => {
  return a + b; 
}

let answer = sumOfTwoNumbers(9, 9);

console.log(answer);

// TYPES IN TYPESCRIPT

// Boolean
let enteringFlowState: boolean = true;

// Number 
let someonesAge: number = 42;

// String
let person = 'Elon Musk'
let favQuote: string = `I'd rather be optimistic and wrong than pessimistic and right - ${person}`

// Array
let pets: string[] = ['dogs', 'cats', 'birds', 'reptiles'];
let interestingPets: Array<string> = ['dragons', 'sharks', 'monkeys'];

// Objects
let wizard: object = {
  name: 'Oz',
  power: 'Over 9,000!'
}

// Null and Undefined
let woops: undefined = undefined;
let invalid: null = null;

// Tuple 
let orderedSequence: [string, number];
orderedSequence = ['fingers', 3];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeOfHands: string = Size[3];
let sizeOfFeet: number = Size.Medium;

// Any - BE VERY CAUTIOUS !!!
let whatever: any = "gibberish";

// Void
let sing = (): void => {
  console.log('Sing Sing Sing!');
}

// Never 
let error = (): never => {
  throw Error('ooops');
}

// Interface 
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}
