/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charMap = {};
    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (charMap[char] >= start) {
            start = charMap[char] + 1;
        }
        charMap[char] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
};