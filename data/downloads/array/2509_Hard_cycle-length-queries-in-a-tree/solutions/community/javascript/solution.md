# Javascript: Cycle length queries in a tree

**Author:** rahulsingh860905
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/5127451/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/5127451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function (n, queries) {
    const result = [];
    for (let i = 0; i < queries.length; ++i) {
        let n1 = queries[i][0];
        let n2 = queries[i][1];
        let cycleLen = 1;
        while (n1 != n2) {
            if (n1 > n2) {
                n1 = Math.trunc(n1/2);
            } else {
                n2 = Math.trunc(n2/2);
            }
            cycleLen++;
        }
        result.push(cycleLen);
    }
    return result;
};
```