
/**
 * Group anagrams in common sublists
 * @param {string[]} strs anagrams
 * @returns {string[]}
 */
function groupAnagrams(strs) {
    if (!strs || strs.length === 0) return [];
    
    const map = new Map();
    for(let str of strs) {
        const encoded = getEncodedStr(str);
        const sublist = map.get(encoded) || [];
        sublist.push(str);
        map.set(encoded, sublist);
    }

    return [...map.values()];
}

function getEncodedStr(str) {
    //constrain says strings will only consist lowercase English letters.
    const arr = new Array(26).fill(0);
    const acode = 'a'.charCodeAt(0);
    
    for(let i=0; i<str.length; i++) {
        const index = str.charCodeAt(i) - acode;
        arr[index] += 1;
    }
    return arr.join('');
}

module.exports = { groupAnagrams };