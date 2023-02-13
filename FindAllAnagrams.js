/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let left = 0, right = 0, count = p.length, res = [], map = new Map();
    for (let char of p) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) >= 0) {
                count--;
            }
        }
        right++;
        if (count === 0) {
            res.push(left);
        }
        if (right - left === p.length) {
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) {
                    count++;
                }
            }
            left++;
        }
    }
    return res;
};
