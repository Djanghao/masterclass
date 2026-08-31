# Easy solution in Typescript

**Author:** kbatyrbayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3057148/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3057148/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Firstly, create 2d array. Then add 1 where needed.

# Approach
<!-- Describe your approach to solving the problem. -->
It's very simple. Firstly, I create 2d array, and fill with zero.
After iterate queries, and find needed cell in the created 2d array.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function rangeAddQueries(n: number, queries: number[][]): number[][] {
    // create 2d array with n
    let arr: number[][] = [];
    for(let i = 0; i < n; i++) {
        // and fill with zero
        arr[i] =  Array(n).fill(0)
    }
    // iterate from queries
    for(let i = 0; i < queries.length; i++) {
        // get each query
        const q = queries[i];
        // find needed cell in 2d arr 
        for(let c = q[0]; c <= q[2]; c++) {
            for(let k = q[1]; k <= q[3]; k++) {
                arr[c][k] += 1
            }
        }
    }
    return arr;
};
```