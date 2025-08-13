
/**
 * Find the Longest Consecutive Sequence
 * @param {number[]} nums 
 * @returns {number}
 */
function longestConsecutive(nums) {
    const set = new Set(nums);
    let longestSequence=0;

    for (let num of nums) {
        if (set.has(num-1)) 
            continue;

        // [num] is the start of the sequence
        let count = 1;
        while(set.has(++num))
            count++;

        if (count > longestSequence)
            longestSequence = count;
    }
    return longestSequence;
}
module.exports = { longestConsecutive }
/** 
 * ALGORITHM:
    nums: [2,20,4,10,3,4,5]
    Q: Is a start of sequence ?
        Y: There isn't an immediate lower number. 
        N: There is an immediate lower number.
    
    BEGIN
    [02] -> (2-1) Is a start of sequence? (Y)
        has 3 ?
            has 4 ?
                has 5 ?
                    has 6 ? 
                    CONTINUE.
    [20] -> (20-19) Is a start of sequence? (Y)
        has 21? 
        CONTINUE.
    [04] -> Is a start of sequence ? N
    [10] -> Is a start of sequence ?
        has 11?
        CONTINUE.
    [03] -> ISN'T a start of sequence
    [04] -> ISN'T a start of sequence
    [05] -> ISN'T a start of sequence
    END
 */