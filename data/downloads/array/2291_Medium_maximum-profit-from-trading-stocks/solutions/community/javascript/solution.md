# Javascript || Knapsack

**Author:** seymuromarov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2106458/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2106458/)

---

```
/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
var maximumProfit = function(present, future, budget) {
    n = present.length
    let dp = new Array(n); for (let i=0; i<=budget; ++i) dp[i] = 0;
    for(let i =0;i<n;i++){
        let diff = future[i] - present[i]
        if (diff <= 0) continue
        for (let j=budget;j>present[i] -1 ;j--){            
            dp[j] = Math.max(dp[j], dp[j-present[i]] + diff)
        }
    }
    return dp[budget]
};
```