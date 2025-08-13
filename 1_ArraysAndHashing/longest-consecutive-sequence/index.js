/**
 * Longest Consecutive Sequence
 * 
 * Given an array of integers nums[], return the length of the longest consecutive sequence of elements that can be formed.
    -A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. 
    - The elements do not have to be consecutive in the original array.
    - You must write an algorithm that runs in O(n) time.
 */

const solution = require('./solution')

// const nums = [2,20,4,10,3,4,5]; //expected 4; explanation [2,3,4,5]
const nums = [0,3,2,5,4,6,1,1]; //expected 7: [0,1,2,3,4,5,6]



console.log('\n----- 9.Longest Consecutive Sequence -----\n');
console.log(`Input: [${nums}]\nOutput: [${solution.longestConsecutive(nums)}]\n`);