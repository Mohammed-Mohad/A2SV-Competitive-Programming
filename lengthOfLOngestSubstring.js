/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0, maxLength = 0;
     let charMap = new Map();
     for (let i = 0; i < s.length; i++) {
         if (charMap.has(s[i]) && charMap.get(s[i]) >= start) {
             start = charMap.get(s[i]) + 1;
         }
         charMap.set(s[i], i);
         maxLength = Math.max(maxLength, i - start + 1);
     }
     return maxLength;
 };
 