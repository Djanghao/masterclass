# JavaScript O(n) Stack Solution with Comments

**Author:** lightweightlion
**Votes:** 21
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/505685/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/505685/)

---

```
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const sums = new Array(n).fill(0);
    const stack = [];
    let prevTime;
    logs.forEach(log => {
        const details = log.split(':');
        const id = parseInt(details[0]);
        const point = details[1];
        const time = parseInt(details[2]);
        if (point === 'start') {
            // If the stack is not empty, we need to increment the sum 
            // of the previous function from previous start time to now
            if (stack.length > 0) {
			    let prevFn = stack[stack.length - 1];
                sums[prevFn] += (time - prevTime);      
            }
            stack.push(id); // Push this function onto the stack
            prevTime = time; // Set the previous start time to the time now
        } else {
            const last = stack.pop(); // Get the last function to start from the top of the stack 
            sums[last] += (time - prevTime + 1); // Increment the sum from start to end, inclusive
            prevTime = time + 1; // Set the previous start time to be one after this function ended
        }
    });
    return sums;
};
```