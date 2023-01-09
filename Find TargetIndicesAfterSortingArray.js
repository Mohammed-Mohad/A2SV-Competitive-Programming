var targetIndices = function(nums, target) {
    let indices=[]
    for (let i = 0; i < nums.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallest] > nums[j]) {
        smallest = j;
      }
    }
    let tempt = nums[smallest];
    nums[smallest] = nums[i];
    nums[i] = tempt;
  }
  for(let i =0; i<nums.length; i++){
      if(target==nums[i]){
          indices.push(i)
      }
  } 
  return indices; 
};