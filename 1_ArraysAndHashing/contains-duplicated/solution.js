/**
 * Checks is an array contains any duplicated item
 * Time: O(n), Space O(n)
 * 
 * @param {number[]} nums
 * @returns {boolean}
*/
function hasDuplicate(nums) {
    return new Set([...nums]).size < nums.length;
}

module.exports = { hasDuplicate };