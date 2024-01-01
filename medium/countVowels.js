/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // check for empty string
  if (!str.length) return 0;
  
  // regular expression to match all vowels
  const vowelsRegex = /[aeiouAEIOU]/gi;

  // match all occurences of vowels and check if any found
  const hasVowels = str.match(vowelsRegex) !== null;

  return hasVowels ? str.match(vowelsRegex).length : 0;
}

module.exports = countVowels;