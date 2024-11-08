"use strict";
// Problem-1:
var numbers = [1, 2, 3, 4, 5];
var sumArray = function (numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
};
console.log(numbers);
console.log(sumArray([1, 2, 3, 4, 5]));
var duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
var removeDuplicates = function (duplicateNumbers) {
    return duplicateNumbers.filter(function (item, index) { return duplicateNumbers.indexOf(item) === index; });
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
var countWordOccurrences = function (sentence, word) {
    var words = sentence.toLowerCase().split(" ");
    var targetWord = word.toLowerCase();
    return words.filter(function (w) { return w === targetWord; }).length;
};
console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
