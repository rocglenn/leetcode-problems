/**
 * Group Anagrams.
 * Given an array of strings strs, group all anagrams together into sublists. 
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * - You may return the output in any order.
 * - You should aim for a solution with O(n * m) time and O(m) space.
 * 
 */
const { groupAnagrams } = require('./solution');

const input = ['act','pots','tops','cat','stop','hat'];
//expected Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log('\n----- 4.Group Anagrams -----\n');
console.log('Input strings: ', input);
console.log('Output: ', groupAnagrams(input));
