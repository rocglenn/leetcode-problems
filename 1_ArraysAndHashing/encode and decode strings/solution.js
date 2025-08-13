const DELIMITER = '#';

/**
 * Encode the input strings into a single string
 * @param {string[]} strs array of strings as input
 * @returns {string}
 */
function encodeFn(strs) {
    //let encoded = '';
    const encoded = [];
    for(let str of strs) {
        /**
        string concatenation is O(n), plus the foor-loop, makes this operation O(n^2), 
        so its changed by a array to keep it as O(n)
        */
        //encoded += `${str.length}${DELIMITER}${str}`
        encoded.push(`${str.length}${DELIMITER}${str}`);
    }
    return encoded.join('');
}

/**
 * Decode a string into its original array 
 * @param {string} str 
 * @returns {string[]}
 */
function decode(str) {
    const decoded = [];
    let i=0;
    //str: 14#leet....4#code4#says5#hello
    while (i < str.length) {
        let toIndex = i;
        
        //find the delimiter to detrmine the word length.
        while(str[toIndex] !== DELIMITER) 
            toIndex++;

        const strLen = parseInt(str.slice(i, toIndex), 10);
        const start = toIndex+1;
        const end = start + strLen;
        
        decoded.push(str.slice(start, end))
        i = end;
    }
    return decoded;
}


/**
 * HEADS UP: Time is O(n^2) bcause of the new string creations inside a loop.
 * Decode a string into its original array 
 * @param {string} str 
 * @returns {string[]}
 */
function decodeBAD(str) {
    const decoded = [];
    
    //str: 4#leet4#code4#says5#hello
    while (str.length > 0) {
        const fromIndex = str.indexOf(DELIMITER);
        const strSize = getSubStringLen(str, fromIndex);
        // take in account: 
        // strSize (maybe is a number of two digits) + delimiter + the word itself
        const toIndex = DELIMITER.length + strSize.length + Number(strSize);
        decoded.push(str.substring(fromIndex+1, toIndex));
        str = str.slice(toIndex);
    }
    return decoded;
}
function getSubStringLen(str, index) {
    // we know for sure index-1 is a number
    let num = str[index-1];

    // but what about words which length is two digit number?
    if (Number(str[index-2])) {
        num = str.substring(index-2, index);
    }
    // What about 3? I don't belive there are words with more than 99 chars)
    return num;
}

/**
 * Encode the input strings into a single strin
 * @param {string[]} strs 
 * @returns {string}
 */
const encode = (strs) => strs.map(s => `${s.length}${DELIMITER}${s}`).join('');

module.exports = { encode , decode }