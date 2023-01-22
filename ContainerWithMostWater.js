/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let n= height.length
    let right = n-1;
    let max_area =0;
    while(left<right){
     let area = Math.min(height[left],height[right])*(right-left)
        if (area > max_area) {
            max_area = area;
        } 
    if (height[left] < height[right]) {
        left++
    }
    else right--
    }
console.log(max_area);
return max_area;
};
height = [1,8,6,2,5,4,8,3,7]
maxArea(height);