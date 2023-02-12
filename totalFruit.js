/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let left = 0;
    let right = 0;
    let count = {};
    let maxFruits = 0;
    
    while (right < tree.length) {
        if (count[tree[right]]) {
            count[tree[right]] += 1;
        } else if (Object.keys(count).length < 2) {
            count[tree[right]] = 1;
        } else {
            maxFruits = Math.max(maxFruits, right - left);
            while (Object.keys(count).length >= 2) {
                count[tree[left]] -= 1;
                if (count[tree[left]] === 0) {
                    delete count[tree[left]];
                }
                left += 1;
            }
            count[tree[right]] = 1;
        }
        right += 1;
    }
    
    return Math.max(maxFruits, right - left);
};
