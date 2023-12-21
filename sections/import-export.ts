import { 
    addTwoNumbers,
    substractTwoNumbers,
    timesNumbers,
    divideTwoNumbers 
} from "../helpers/math-helpers";

export function greet (name: string = "mundo") {
    console.log( "Hola " + name );
}

// let firstname = 'wilson';
let nun1 = 10;
let nun2 = 20;

// greet(firstname);
let total1: number = addTwoNumbers( nun1 , nun2 );
let total2: number = substractTwoNumbers( nun1 , nun2 );
let total3: number = timesNumbers( nun1 , nun2 );
let total4: number = divideTwoNumbers( nun1 , nun2 );


console.log('Total1: ', total1);
console.log('Total2: ', total2);
console.log('Total3: ', total3);
console.log('Total4: ', total4);
