
var MinStack = function() {
    stack  = []
    min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    stack.push(val)    
    if( min.length == 0){
        min.push(val)
    }else{
        if( min[min.length-1] >= val){
            min.push(val)
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    lastVal = stack.pop();
    if (min[min.length-1] == lastVal){
        min.pop()
    }
    return lastVal;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    topVal=stack[stack.length -1]
    return topVal;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return min[min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */