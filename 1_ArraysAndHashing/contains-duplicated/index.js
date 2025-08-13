const { hasDuplicate } = require('./solution');

/**
 * Contains Duplicated
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false
 * 
 * You should aim for a solution with O(n) time and O(n) space.
*/


const array = [1, 2, 3, 4, 3];
console.log('\n----- 1.Conatins Dupplicated -----\n');
console.log(`Input: [${array}]\nHas duplicate value? ${hasDuplicate(array)}`);