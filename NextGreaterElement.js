/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    num = [];
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j]) {
          if (nums2[j + 1] > nums2[j]) {
            num.push(nums2[j + 1]);
          } else {
            pushed = false;
  
            for (let k = j; k < nums2.length; k++) {
              if (nums2[k] > nums2[j]) {
                  num.push(nums2[k])
                  pushed = true
                  break
            }
          }
            if (!pushed) {
              num.push(-1);
            }
          
          }
        }
      }
    }
    return num;
  };