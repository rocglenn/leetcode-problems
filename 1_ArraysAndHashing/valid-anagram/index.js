/**
 * Valid Anagram.
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * 
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * You should aim for a solution with O(n + m) time and O(1) space.
 */
const { isAnagram2 } = require('./solution');

const s = "tom marvolo riddle";
const t = "iam lord voldemort";

console.log('\n----- 2.Valid Anagram -----\n');
console.log(`Is '${s}' anagram of '${t}' ? ${isAnagram2(s, t)}`);