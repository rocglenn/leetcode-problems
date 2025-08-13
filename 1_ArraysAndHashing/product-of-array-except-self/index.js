/**
 * Product of Array Except Self
 * 
 * Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
 * - Each product is guaranteed to fit in a 32-bit integer. 
 * - You should aim for a solution as good or better than O(n) time and O(n) space
 */

const solution = require('./solution')

const nums = [1,2,4,6];


console.log('\n----- 7.Product of Array Except Self -----\n');
console.log(`Input: [${nums}]\nOutput: [${solution.productExceptSelf1(nums)}]\n`);