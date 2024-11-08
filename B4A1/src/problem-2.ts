// problem-2:

type DuplicateNumbers = number[];
const duplicateNumbers : DuplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

type RemoveDuplicates = (duplicateNumbers : number[]) => number[];
const removeDuplicates : RemoveDuplicates = (duplicateNumbers) => {
    return duplicateNumbers.filter((item, index) => duplicateNumbers.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
