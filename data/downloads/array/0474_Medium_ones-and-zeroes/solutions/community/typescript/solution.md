# Form, match, max

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/4344926/](https://leetcode.com/problems/ones-and-zeroes/solutions/4344926/)

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
function findMaxForm(strs: string[], m: number, n: number): number {
    let dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
    
    for (let str of strs) {
      let strZero = (str.match(/0/g) || []).length;
      let strOne = (str.match(/1/g) || []).length;

      for (let x = m; x >= strZero; x--)
        for (let y = n; y >= strOne; y--)
          dp[x][y] = Math.max(dp[x][y], dp[x - strZero][y - strOne] + 1);
    }
    
    return dp[m][n]
};
```