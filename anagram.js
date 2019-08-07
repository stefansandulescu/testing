// https://practicejs.com/anagrams
// Write a function to check if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

// Examples:
// fn("sleep", "speel") === true
// fn("SLEEP!!", "speel") === true
// fn("Hi", "Bye") === false

function isAnagram(a, b) {
  var reg = new RegExp(/\W*/g);
  var charsA = a.replace(reg, '').toLowerCase();
  var charsB = b.replace(reg, '').toLowerCase();
  var arrayA = [...charsA].sort();
  var arrayB = [...charsB].sort();

  return arrayA.join('') === arrayB.join('');
}