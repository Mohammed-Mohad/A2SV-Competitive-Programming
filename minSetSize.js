/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }
    let values = Object.values(count);
    values.sort((a, b) => b - a);
    let result = 0;
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        result++;
        if (sum >= arr.length / 2) {
            break;
        }
    }
    return result;
};
