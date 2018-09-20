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
