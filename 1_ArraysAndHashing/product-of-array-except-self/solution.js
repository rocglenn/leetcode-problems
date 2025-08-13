
/**
 * Find the product of all elements except num[i]
 * @param {number[]} nums 
 * @returns {number[]}
 */
function productExceptSelf(nums) {
    // this just works for numbers != 0, 
    // when a 0 is in array will make total == 0
    let total = 1;
    for(let num of nums) total *= num;

    const output = [];
    for (let i=0; i < nums.length; i++) {
        output[i] = nums[i] === 0 ? 0 : total/nums[i];
    }
    
    return output;
}

/**
 * Find the product of all elements except num[i]
 * @param {number[]} nums 
 * @returns {number[]}
 */
function productExceptSelf1(nums) {
    const output = new Array(nums.length).fill(1);
    
    // first round, from 0 to N
    // Accumulator wild hold the previous total until the current index.
    let acc = 1;
    for (let i=0; i<nums.length; i++) {
        output[i] *= acc;
        acc *= nums[i];
    }

    //second round, from N to 0
    acc = 1;
    for (let i= nums.length-1; i >= 0; i--) {
        output[i] *= acc
        acc *= nums[i];
    }

    return output;
}


module.exports = { productExceptSelf, productExceptSelf1 }

/**
 * FROM LEFT TO RIGHT
 nums: [1,2,4,6]
 Accumulator: 1
    [0] 1*1= 1    
    [1] 1*2= 2
    [2] 2*4= 8
    [3] 8*6= 48
 output:
    [0] [1]
    [1] [1, 1]
    [2] [1, 1, 2]
    [3] [1, 1, 2, 8]

 * FROM RIGHT TO LEFT
 nums: [1,2,4,6]
 Accumulator: 1
    [0] 1*6= 6    
    [1] 6*4= 24
    [2] 24*2= 48
    [3] 8*6= 48
 output:
    [0] [ 1,  1,  2, 8]
    [1] [ 1,  1, 12, 8]
    [2] [ 1, 24, 12, 8]
    [2] [48, 24, 12, 8]
 */