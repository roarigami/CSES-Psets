//CSES Problem #3 Repititions
//You are given a DNA sequence: a string consisting of characters A, C, G, and T.
//Your task is to find the longest repetition in the sequence. This is a maximum-length
//substring containing only one type of character.


const findLongestRep = (sequence, length) => {
    let longestSubstrLen = 0;
    let ans = 1;
    let char = 'A';

    for(let i = 0; i < length; i++) {
        if(sequence[i] == char) {
            ++longestSubstrLen;
            ans = Math.max(longestSubstrLen, ans);
        } else {
            char = sequence[i];
            longestSubstrLen = 1;
        }
    }

    return ans;

}

let dnaSequence = ["A", "A", "A", "C", "C", "C", "C", "C", "G", "G", "T"];
let sqnLen = dnaSequence.length;
let dnaSeq = findLongestRep(dnaSequence, sqnLen);

console.log(dnaSeq);
