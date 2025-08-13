/**
 * Top K Frequent Elements
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 * - The test cases are generated such that the answer is always unique.
 * - You may return the output in any order.
 * - You should aim for a solution with O(n) time and O(n) space.
 */

const { topKFrequent1 } = require('./solution')

const nums = [5,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4,9];
const k = 2;


console.log('\n----- 4.Top K Frequent Elements -----\n');
console.log(`Input: [${nums}]\nTop ${k} frequent items are: ${topKFrequent1(nums, k)}`);