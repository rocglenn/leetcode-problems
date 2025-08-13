/**
 * Encode and Decode Strings
 * 
 * Design an algorithm to encode a list of strings to a single string. 
 * The encoded string is then decoded back to the original list of strings
 * - strs[i] contains only UTF-8 characters.
 */

const solution = require('./solution');

const input = ['lorem-Ipsum-guy','sends','its','regards'];


console.log('\n----- 6.Encode and Decode Strings -----\n');
console.log(`Input:   [${input}]\n`);
const encoded = solution.encode(input);
console.log(`Encoded: '${encoded}'.\n`);
console.log(`Decoded: [${solution.decode(encoded)}].\n`);
