/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // lowercase the string for case-insensitive comparison
  str = str.toLowerCase();

  // remove non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/g, "");

  // use 2 pointers starting from both ends of the string
  let left = 0;
  let right = str.length - 1;

  // compare chara until they meet or mismatch
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

module.exports = isPalindrome;
