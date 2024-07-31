/**
 * 1 Two Sum
 * https://leetcode.com/problems/two-sum/description/
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * -You may assume that each input would have exactly one solution.
 * -You may not use the same element twice.
 * -You can return the answer in any order.
 * 
 * Example1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
 * Example2:
    Input: nums = [3,3], target = 6
    Output: [0,1]
 */

const input = [2,7,11,15];
console.log('Input: ', input);
console.log('Output: ', twoSum(input, 9));
console.log('brute force', solution(input, 9));

/**
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum(nums, target) {
    //we need to save into the map: key = nums[i], value = index
    //but when iterating, note that instead of adding values to check if they adds up to target, 
    //we could do the opposite and look for: key === nums[i]-target
    const map = new Map();
    for(let i=0; i < nums.length; i++) {
        const key = target - nums[i];
        if (map.has(key))
            return [map.get(key), i];

        map.set(nums[i], i);
    }
    return [];
}

function solution(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) 
                return [i,j]
        }
    }
    return [];
}