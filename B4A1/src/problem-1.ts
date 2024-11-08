// Problem-1:

type Numbers = number[];
const numbers = [1, 2, 3, 4, 5];

type SumArray = (numbers : number []) => number;

const sumArray : SumArray = (numbers) => {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(numbers); 
console.log(sumArray([1, 2, 3, 4, 5]));

