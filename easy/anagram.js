/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // remove clear spaces
  const clearStr1 = str1.replace(/\s/g, '').toLowerCase();
  const clearStr2 = str2.replace(/\s/g, '').toLowerCase();

  // if the length of the 2 string is different, no point in comparing them further
  if (clearStr1.length !== clearStr2.length) {
    return false;
  }

  // convert to arrays and sort them
  const sortedStr1 = clearStr1.split('').sort().join('');
  const sortedStr2 = clearStr2.split('').sort().join('');

  // if the arrays are same, the below will return true
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
