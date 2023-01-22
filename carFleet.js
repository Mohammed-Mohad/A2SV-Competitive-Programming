/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let n = position.length;
    let cars = new Array(n);
    for (let i = 0; i < n; i++) {
        cars[i] = [position[i], speed[i]];
    }
    cars.sort((a, b) => a[0] - b[0]);
    let stack = [];
    for (let i = 0; i < n; i++) {
        let [pos, speed] = cars[i];
        let time = (target - pos) / speed; 
        while (stack.length > 0 && (target - stack[stack.length - 1][0]) / stack[stack.length - 1][1] <= time) {
            stack.pop();
        }
        stack.push([pos, speed, time]);
    }
    console.log(stack.length);
    return stack.length;

}; 


// target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// carFleet(target,position,speed)