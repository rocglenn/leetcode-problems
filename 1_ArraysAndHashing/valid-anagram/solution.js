
/**
 * Check if two strings are anagrams
 * @param {string} sWord string s
 * @param {string} tWord string t
 * @returns {boolean}
 */
function isAnagram(sWord, tWord) {
    // edge cases
    if (sWord.length !== tWord.length) return false;
    if (sWord.length === 1 && tWord.length === 1) return sWord === tWord;

    // initialize both maps at same time
    const smap = new Map();
    const tmap = new Map();
    for (let i = 0; i < sWord.length; i++) {

        //s-map
        smap.set(sWord[i], (smap.get(sWord[i]) || 0) + 1);
        
        //t-map
        tmap.set(tWord[i], (tmap.get(tWord[i]) || 0) + 1);
    }

    //console.log(smap);
    //console.log(tmap);
    for (const [letter, count] of smap.entries()) {
        if (tmap.has(letter) && tmap.get(letter) === count) continue;
        else return false;
    }
    return true;
}


//same but just one map
function isAnagram2(sWord, tWord) {
    // edge cases
    if (sWord.length !== tWord.length) return false;
    if (sWord.length === 1 && tWord.length === 1) return sWord === tWord;

    // initialize a map with letter from s-word
    const map = new Map();
    for (let i = 0; i < sWord.length; i++) {
        map.set(sWord[i], (map.get(sWord[i]) || 0) + 1);
    }

    // This time loop through t-word;
    // kinda the opposite from previous loop
    for (let i = 0; i < tWord.length; i++) {
        let count = map.get(tWord[i]);
        if (!count) return false;

        map.set(tWord[i], count - 1);
    }
    // If we reach this far, it means all values must be 0, so both words are anagrams.
    return true;
}


module.exports = { isAnagram2 };