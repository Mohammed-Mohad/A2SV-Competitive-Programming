/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let y = 0;
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
      stack.push(pushed[i]);
      while (stack.length > 0 && stack[stack.length - 1] == popped[y]) {
        stack.pop();
        y++;
      }
    }
  //   console.log(stack);
      if(stack.length==0) return true
      else return false
  };