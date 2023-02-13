/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let result = [];
    let n = arr.length;
    for (let i = n; i > 1; i--) {
        let j = arr.indexOf(i);
        if (j !== i - 1) {
            if (j !== 0) {
                result.push(j + 1);
                arr = arr.slice(0, j + 1).reverse().concat(arr.slice(j + 1));
            }
            result.push(i);
            arr = arr.slice(0, i).reverse().concat(arr.slice(i));
        }
    }
    return result;
};
