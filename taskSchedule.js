/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const frequency = new Array(26).fill(0);
   for (const task of tasks) {
       frequency[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
   }
   frequency.sort((a, b) => b - a);
   let idleTime = (frequency[0] - 1) * n;
   for (let i = 1; i < frequency.length && frequency[i] > 0; i++) {
       idleTime -= Math.min(frequency[i], frequency[0] - 1);
   }
   return idleTime > 0 ? tasks.length + idleTime : tasks.length;
};
