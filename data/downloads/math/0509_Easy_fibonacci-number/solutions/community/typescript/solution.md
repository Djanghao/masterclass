# Bottom-up with Tabulation

**Author:** vynmetropolia
**Votes:** 7
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/1226374/](https://leetcode.com/problems/fibonacci-number/solutions/1226374/)

---

```
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```