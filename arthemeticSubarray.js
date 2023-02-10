/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const isArithmetic = (arr) => {
          if (arr.length <= 2) return true;
          const diff = arr[1] - arr[0];
          for (let i = 2; i < arr.length; i++) {
              if (arr[i] - arr[i - 1] !== diff) return false;
          }
          return true;
      };
      const res = [];
      for (let i = 0; i < l.length; i++) {
          const sub = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
          res.push(isArithmetic(sub));
      }
      return res;  
  };
  