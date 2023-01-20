/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length - 1;
  let answer = new Array(n).fill(0);
  let stack = new Array();
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  return answer;
};
// temperatures = [73, 74, 75, 71, 69, 72, 70, 76];
// console.log(dailyTemperatures(temperatures));
