/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let numbers = [3, 7, 2, 9, 1];
let numSize = numbers.length;

function findLargestElement(numbers) {
    let biggestNumber = numbers[0];
    for (let i = 0; i < numSize; i++) {
        if (biggestNumber < numbers[i]) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}

module.exports = findLargestElement;