# Simple Typescript Solution (Beats 96%)

**Author:** Januston
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/5034455/](https://leetcode.com/problems/range-addition-ii/solutions/5034455/)

---

# Approach
Find minimum length and width and multiply

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
function maxCount(m: number, n: number, ops: number[][]): number {
    if(ops.length == 0) return m*n;

    let minM = m;
    let minN = n;
    for(let op of ops) {
        minM = Math.min(op[0], minM);
        minN = Math.min(op[1], minN);
    }
    return minM * minN;

};
```