/**
 * Two Sum
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j
 * 
 * - You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * - You should aim for a solution with O(n) time and O(n) space.
 * - Return the answer with the smaller index first.
 */
const { twoSum } = require('./solution');

const nums = [2,11,15,7];
const target = 9;

console.log('\n----- 3.Two Sums -----\n');
console.log(`Input: [${nums}] \nTarget: ${target} \nOutput: [${twoSum(nums, target)}]`);