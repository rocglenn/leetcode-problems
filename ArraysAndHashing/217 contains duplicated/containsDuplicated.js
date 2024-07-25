/**
* 217. Contains duplicated.
* https://leetcode.com/problems/contains-duplicate/
* Given an integer array nums, return true if any value appears at least twice in the array, or false if
* every element is distinct.
* Example 1: 
* Input: [1,2,3,3]
* Output: true
* */

const input = [1,2,3,3];

function hasDuplicate(nums) {
    return new Set(nums).size != nums.length;
}

console.log('Input: ', input);
console.log('Output:', hasDuplicate(input));