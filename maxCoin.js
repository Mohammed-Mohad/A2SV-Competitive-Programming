/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < piles.length / 3; i++) {
        sum += piles[i * 2 + 1];
    }
    return sum;
};
