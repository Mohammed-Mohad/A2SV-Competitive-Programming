/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0;
    let j = 0;
    let countZeros = 0;
    let maxLength = 0;

    while (j < nums.length) {
        if (nums[j] === 0) {
            countZeros += 1;
        }

        while (countZeros > k) {
            if (nums[i] === 0) {
                countZeros -= 1;
            }
            i += 1;
        }

        maxLength = Math.max(maxLength, j - i + 1);
        j += 1;
    }

    return maxLength;
};
