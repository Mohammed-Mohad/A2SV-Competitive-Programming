/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let leftSum = 0, rightSum = 0;
    for (let i = cardPoints.length - 1; i >= cardPoints.length - k; i--) {
        rightSum += cardPoints[i];
    }
    let maxSum = rightSum;
    for (let i = 0; i < k; i++) {
        leftSum += cardPoints[i];
        rightSum -= cardPoints[cardPoints.length - k + i];
        maxSum = Math.max(maxSum, leftSum + rightSum);
    }
    return maxSum;
};
