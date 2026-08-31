# Beats 100.00%of users with TypeScript

**Author:** SSDeepakReddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/4166562/](https://leetcode.com/problems/max-value-of-equation/solutions/4166562/)

---


# Code
```
function findMaxValueOfEquation(points: number[][], k: number): number {
 
    
    let max = -Infinity;
    let maxQueue = [];
    for (let [x, y] of points) {
        while (maxQueue.length && x - maxQueue[0][1] > k) {
            maxQueue.shift();
        }
        if (maxQueue.length) {
            max = Math.max(max, maxQueue[0][0] + y + x);
        }
        while (maxQueue.length && y - x > maxQueue[maxQueue.length - 1][0]) {
            maxQueue.pop();
        }
        maxQueue.push([y - x, x]);
    }
    return max;
};
```