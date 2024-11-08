"use strict";
// Problem-1:
var numbers = [1, 2, 3, 4, 5];
var sumArray = function (numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
};
console.log(numbers);
console.log(sumArray([1, 2, 3, 4, 5]));
