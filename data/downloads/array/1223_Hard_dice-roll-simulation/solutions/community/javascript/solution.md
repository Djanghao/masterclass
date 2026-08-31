# 100% runtime and memory

**Author:** frozenzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/4237300/](https://leetcode.com/problems/dice-roll-simulation/solutions/4237300/)

---

Runtime
Details
419ms
Beats 100.00%of users with JavaScript
Memory
Details
97.21MB
Beats 100.00%of users with JavaScript

# Code
```
/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    let dp = {}
    let help = (prev, rolls, rollsLeft) => {
        if(rolls == n) return 1;
        if(dp[rolls] == undefined) dp[rolls] = {}
        if(dp[rolls][rollsLeft] == undefined) dp[rolls][rollsLeft] = {}
        if(dp[rolls][rollsLeft][prev] != undefined) return dp[rolls][rollsLeft][prev]
        let sum = 0;
        for(let i = 0; i < rollMax.length; i++) {
            if(rollsLeft === 0 && prev===i) continue
            if(prev===i) sum += help(i, rolls+1, rollsLeft-1)
            else sum += help(i, rolls+1, rollMax[i]-1)
        }
        
        dp[rolls][rollsLeft][prev] = sum % ((10**9) + 7)
        return dp[rolls][rollsLeft][prev]
    }
    return help(null, 0, Infinity)
}
```