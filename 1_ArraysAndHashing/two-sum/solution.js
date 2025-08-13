/**
 * Find the two indexes that adds up to target
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        const difference = target - nums[i];
        
        if (!map.has(difference)) {
            map.set(nums[i], i);
            continue;
        }

        const index = map.get(difference);
        //we need to return the smallest index first
        return index < i ? [index, i] : [i, index];
    }
    return [];
}

module.exports = { twoSum };