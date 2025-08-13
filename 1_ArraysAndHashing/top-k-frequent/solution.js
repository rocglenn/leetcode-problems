/**
 * Find the k most frequent elements within the array.
 * @param {number[]} nums numbers array
 * @param {number} k number indicating top K number to find
 * @returns {number[k]}
 */
function topKFrequent(nums, k) {
    // sorting takes nlogn, maybe is there a better way
    nums = nums.sort((a,b) => b-a);
    const result = [];

    let current = nums[0];
    let i=0;
    while(k > 0) {
        if (current === nums[i]) {
            i++;
            continue;
        }
        
        k--;
        result.push(current);
        current = nums[i+1];
    }
    return result;
}


/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */
function topKFrequent1(nums, k) {
    // set a map with num as key and its frecuency as value.
    // (map is unsorted)
    const map = new Map();
    for (let num of nums)
        map.set(num, (map.get(num) || 0) + 1);

    // instead of sorting by frecuency, we could use a bucket to place the numbers under ceratin index;
    // index === frecuency; ie:
    // nums:     [5,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4,9]
    // bucket:   [0,1,2,3,   4   , 5 , ........,N-1] (indexes are the frecuencies)
    // bucket:   [_,_,_,_,[1,2,4],[3], ....]         (values under given index)
    const bucket = [];
    for(let [num,freq] of map) {
        //just for clarity
        let index=freq;
        //we need an array to support numbers with duplicated frecuencies
        if(!bucket[index]) bucket[index]=[];
        bucket[index].push(num);
    }

    // loop from N to 0, to return the top K frecuent element
    const result = [];
    for(let i=bucket.length; i > 0; i--) {
        if(!bucket[i]) continue;

        for(let j=0; j<bucket[i].length; j++) {
            result.push(bucket[i][j]);
            k--;
            if (k === 0) return result;
        }
    }
    return result;
}

module.exports = { topKFrequent1 };