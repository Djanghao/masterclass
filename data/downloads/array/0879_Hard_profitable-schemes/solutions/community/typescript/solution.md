# TS Solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/4629350/](https://leetcode.com/problems/profitable-schemes/solutions/4629350/)

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
function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
    let dp: number[][][] = new Array(profit.length);
    const mod = 1000000007;
    

    function trav(n: number, p: number, group: number[], profit: number[], index: number, dp: number[][][]): number {
        let ans = 0;
        if (n < 0)
            return ans;
        if (index >= group.length) {
            if (p <= 0)
                return 1;
            return ans;
        }
        if (p < 0)
            p = 0;
        if (dp[index][n][p] != -1)
            return dp[index][n][p];
        ans = (ans % mod + trav(n - group[index], p - profit[index], group, profit, index + 1, dp) % mod) % mod;
        ans = (ans % mod + trav(n, p, group, profit, index + 1, dp) % mod) % mod;
        dp[index][n][p] = ans;
        return ans;
    }
    for (let i = 0; i < profit.length; i++) {
        dp[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) {
            dp[i][j] = new Array(minProfit + 1);
            for (let k = 0; k <= minProfit; k++)
                dp[i][j][k] = -1;
        }
    }
    return trav(n, minProfit, group, profit, 0, dp);
}

```