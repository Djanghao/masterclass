# dp solution

**Author:** abdalrahmanaldammad
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5836169/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5836169/)

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
```javascript []
/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function (a, b) {
    let dp = Array.from({ length: a.length }, () =>
        Array.from({ length: b.length }, () => -Infinity)
    );
    dp[0][0] = a[0] * b[0];
    for (let i = 1; i < b.length - 3; i++) {
        dp[0][i] = Math.max(b[i] * a[0], dp[0][i - 1]);
    }

    let c = 2;
    for (let i = 1; i < dp.length; i++) {
        for (let j = i; j < dp[0].length - c; j++) {
            dp[i][j] = Math.max(a[i] * b[j] + dp[i - 1][j - 1], dp[i][j - 1]);
        }
        c--;
    }


    return dp[3][b.length - 1];
};
```