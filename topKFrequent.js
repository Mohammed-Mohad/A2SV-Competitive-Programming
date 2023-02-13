/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    let values = Object.values(count);
    values.sort((a, b) => b - a);
    let result = [];
    for (let i = 0; i < k; i++) {
        for (let key in count) {
            if (count[key] === values[i]) {
                result.push(Number(key));
                delete count[key];
                break;
            }
        }
    }
    return result;
};
