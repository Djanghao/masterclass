# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 28
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/472262/](https://leetcode.com/problems/interval-list-intersections/solutions/472262/)

---

### The idea
1. Between two intervals, get the latest start time as `maxStart` and the earliest end time as `minEnd`. If `maxStart <= minEnd`, this means there is an overlap.
``` javascript
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let Ai = 0, Bi = 0;
    let res = [];
    
    while (Ai < A.length && Bi < B.length) {
        let maxStart = Math.max(A[Ai][0], B[Bi][0]);
        let minEnd = Math.min(A[Ai][1], B[Bi][1]);
        
        if (maxStart <= minEnd) res.push([maxStart, minEnd]) // overlap found
        
        if (A[Ai][1] < B[Bi][1]) Ai++;
        else Bi++;
    }
    
    return res;
};
```