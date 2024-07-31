/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: true
 */


/**
 * Check if S and T are valid anagrams
 * @param {string} s 
 * @param {string} t 
 */
function isAnagram(s, t) {
    //both params must have the same length
    if (s.length !== t.length) return false;

    const map = new Map();
    let count=0;
    //map all chars in S and store them as <char:#occurrences>
    for(let i=0; i<s.length; i++) {
        count = map.get(s[i]) || 0;
        map.set(s[i], ++count);
    }

    //compare S against T
    for (let j=0; j<t.length; j++) {
        const key = t[j];
        //if T[i] doesn't exists in S, we can conclude S and T aren't anagrams
        if (!map.has(key)) return false;

        //T[i] exists in S
        //subtract 1 from the count
        let count = map.get(key) - 1;

        //if count goes below 0, S and T aren't anagrams
        if (count < 0) return false;

        map.set(key, count);
    }
    return true;
} 