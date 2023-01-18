var shortestSubarray = function(nums, k) {
    var win=[];
    let i=0;
    let sum=0;
    let min = 1000000;
    do{
        console.log(win);
        if(sum<k && (win.length == 0 || win[0] > 0))
        {
            if(i >= nums.length){
                break
            }
            win.push(nums[i])
            sum+=nums[i]
            i++;
        }
        else {
            let out = win.shift();
            sum -= out;
        }

        if(win.length < min && sum>= k){
            min = win.length;
        }
    }while(true)

    if(min == 1000000)
        return -1

    return min
};
num = [-34,37,51,3,-12,-50,51,100,-47,99,34,14,-13,89,31,-14,-44,23,-38, 6]
k = 151
console.log(shortestSubarray(num, k));