# JavaScript Solution - Monotonic Stack and DP

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/2132695/](https://leetcode.com/problems/jump-game-viii/solutions/2132695/)

---

This is similar to [2289. Steps to Make Array Non-Decreasing](https://leetcode.com/problems/steps-to-make-array-non-decreasing/). We need to use both monotonic increasing and monotonic decreasing stacks. Also, we need to use a dp to keep track of the minimum cost to get to an index.


```
var minCost = function(nums, costs) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const n = nums.length;
    
    const dp = new Array(n).fill(MAX);
    dp[0] = 0;
    
    const decStack = [0];
    const incStack = [0];
    
    for (let i = 1; i < n; ++i) {
        const num = nums[i];

        let minCost = MAX;

        while (decStack.length > 0 && nums[decStack[decStack.length - 1]] <= num) {
            const topIdx = decStack.pop();
            const topCost = dp[topIdx];
            minCost = Math.min(minCost, topCost);
        }
        decStack.push(i);

        while (incStack.length > 0 && nums[incStack[incStack.length - 1]] > num) {
            const topIdx = incStack.pop();
            const topCost = dp[topIdx];
            minCost = Math.min(minCost, topCost);
        }
        incStack.push(i);

        dp[i] = minCost + costs[i];
    }
    
    return dp[n - 1];
};
```