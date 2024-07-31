/**
 * 49 Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
const test1= ["eat","tea","tan","ate","nat","bat"];
const test2 =["cab","tin","pew","duh","may","ill","buy","bar","max","doc"];
const test3 =["bdddddddddd","bbbbbbbbbbc"];
console.log('49 Group Anagrams.\n')
console.log('Input:  ', test1);
console.log('Output: ', solution(test1));

/**
This function takes an approach of grouping words by getting the sum of its characters.
In theory if two words have the same weight they are anagrams independently of the order of its characters
ie: "eat" nad "tea"
TIME: O(m*n*26) => O(m*n)
    m = length of array strs.
    n = average length of each word in strs.
 * @param {string[]} strs 
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    /**
    NOTE: This is not working correctly because there are some cases when some words have
    duplicated characters, which can lead to get same value for both words, but in fact they 
    are not anagrams, ie:
    - duh = 100+117+104 = 321
    - ill = 105+108+108 = 321
    */

    //map<weight, string[]>
    const map = new Map();
    for(let word of strs) {
        let weight = 0;
        for(let c of word) {
            weight += c.charCodeAt(0);
        }
        const value = map.get(weight) || [];
        value.push(word);
        map.set(weight, value);
    }
    return [...map.values()];
}

/**
 * This approach also works by grouping words, but as key is used some sort of hash string counting how many
 * times each character appears in given word and group words that have the same hash.
 * TIME: O(m*n*26) => O(m*n)
    m  = length of strs array.
    n  = average length of each word str[i] of strs.
    26 = length of the alphabetBucket array (because is a fixed length is considered a Constant)
 * MEMORY O(m*n)
    m*n = map
    O(1) = fixed bucket size
 * @param {string[]} strs
 */
function solution(strs) {
    //map<string, string[]>
    const map = new Map();
    
    //Bucket where each of its index represents a char position; a->[0], b->[1], ..., z->[25],
    //and what it stores, is, the number of occurrences of each char appears in 'word'
    const alphabetBucket = new Array(26).fill(0);
    for (let word of strs) {
        for (let c of word) {
            //gets the index for a given char by subtracting its numeric value ie:
            //'a'-'a'=>0, 'b'-'a'=>1, ..., 'z'-'a'=>25
            alphabetBucket[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = alphabetBucket.toLocaleString();
        const value = map.get(key) || [];

        value.push(word);
        map.set(key, value);

        alphabetBucket.fill(0);
    }
    return [...map.values()];
}

//TIME: O(m*(NlogN)
function sortingWords(strs) {
    //map<sortedString, string[]>
    const map = new Map();
    for(let word of strs) {
        //split & join takes O(N)
        //sort takes O(n log n)
        const key = word.split('').sort().join(''); //each key => O(n + log n + n) => O(n log n) 
        if (!map.has(key)) {
            map[key] = [];
        }
        map[key].push(word)
    }
    console.log(map);
    return Object.values(map);
}