/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = nums.length-1;
    let l = 0;
    let curr = 0;
    while(curr <= r){
        if(nums[curr] == 0){
            [nums[curr],nums[l]]=[nums[l],nums[curr]]
            l++;
            curr++;
        }
        else if(nums[curr]==2){
            [nums[curr],nums[r]]=[nums[r],nums[curr]];
            r--
        }
        else curr++
    }
    return nums;
};
