/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
if ( n === 0) return 
 else  {
  
    return myPow(x * n);
    n-=n
 }
};
console.log(myPow(2, 3));
