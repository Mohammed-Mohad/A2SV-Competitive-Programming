/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefix = 0;
    let sum = 0;
    for(let n of nums){
        sum+=n;
    }
    for(let i = 0; i<nums.length; i++){
        if(prefix == sum - prefix - nums[i]){
            return i;
        }
        prefix +=nums[i];
    }
    return -1;
  };
  