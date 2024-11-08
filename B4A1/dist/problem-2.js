"use strict";
// problem-2:
var duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
var removeDuplicates = function (duplicateNumbers) {
    return duplicateNumbers.filter(function (item, index) { return duplicateNumbers.indexOf(item) === index; });
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
