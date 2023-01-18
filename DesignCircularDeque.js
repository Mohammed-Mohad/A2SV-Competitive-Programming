/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    deque = []
    maxSize = k
    // front = -1
    // rear = -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {

    if (deque.length === maxSize) {
        console.log("overflow")
        return false
    }
    // else if (front == -1) {
    //     front = rear = 0;
    // }
    // else {
    //     rear++;
    // }
    deque.unshift(value);
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (deque.length == maxSize) {
        console.log("overflow")
        return false
    }

    // if (front == -1) {
    //     front = rear = 0
    // }
    // else {
    //     rear++
    // }
    deque.push(value)
    return true

}
/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (deque.length == 0) {
        console.log("underflow")
        return false
    }

    // if (rear == 0) {
    //     front == -1;
    //     rear == -1;
    // }
    // else {
    //     rear--;
    // }
    deque.shift()
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (deque.length == 0) {
        console.log("underflow")
        return false
    }

    // if (rear == front && front == 0) {
    //     front == -1;
    //     rear == -1;
    // }
    // else {
    //     rear--;
    // }
    deque.pop()
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (deque.length==0) {
        return -1;
    }

    return deque[0];


};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (deque.length == 0) {
        return -1;
    }
    return deque[deque.length - 1];


};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    if (deque.length == 0) return true;
    return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    if (deque.length == maxSize) {

        return true;
    }
    else return false;
};


/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */