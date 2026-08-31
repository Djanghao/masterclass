# [JavaScript] Dynamic Programming w/ explanation

**Author:** stevenkinouye
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211364/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211364/)

---

Credit to annashekhawat [here](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/discuss/1211070/C%2B%2B-Detailed-Explanation-with-Thought-Process-or-DP)
```javascript
	// WRITTEN VERBOSE BELOW WITH EXPLANATION
 const rearrangeSticks = (N, K) => {
    const dp = Array.from({ length: N + 1 }, () => new Array(K + 1));
    const dfs = (n, k) => {
        if (k > n || k === 0) return 0;
        if (n === 1) return 1;
        if (dp[n][k] !== undefined) return dp[n][k]
        const numberOfSmallerSticks = n - 1;
        const pickTallestStick = dfs(numberOfSmallerSticks, k - 1);
        const pickOneOfNotTallestStick = dfs(numberOfSmallerSticks, k);
        return dp[n][k] = (pickTallestStick + pickOneOfNotTallestStick * numberOfSmallerSticks) % 1000000007;
    }
    return dfs(N, K);
};
```

```
 const rearrangeSticks = (n, k) => {
    const memo = Array.from({ length: n + 1 }, () => new Array(k + 1));
     
    // we will pick sticks starting from the right going to the left
    const dfs = (numSticks, numSticksToBeVisible) => {
        
        // base cases
        if (numSticksToBeVisible > numSticks || numSticksToBeVisible === 0) return 0;
        if (numSticks === 1) return 1;
        
        // if we have seen this combination before, return the result
        if (memo[numSticks][numSticksToBeVisible] !== undefined) return memo[numSticks][numSticksToBeVisible]
        
        // find the number of combinations when picking the tallest stick
        const totalCombinationsPickingTallestStick = dfs(numSticks - 1, numSticksToBeVisible - 1);
        
        // find the number of combinations picking any of the sticks that is smaller
        // than the tallest stick
        const pickOneOfNotTallestStick = dfs(numSticks - 1, numSticksToBeVisible);
        // count the number of sticks that are smaller than the tallest stick
        const numSticksSmallerThanTallestStick = numSticks - 1;
        // multiply the number of smaller sticks by the number of picking one of the smaller sticks
        const totalCombinationsOfSmallerSticks = pickOneOfNotTallestStick * numSticksSmallerThanTallestStick;
        /***** WRITING PREVIOUS 3 LINES IN A VERBOSE MANNER ****
        
        let totalCombinationsOfSmallerSticks = 0;
        const numSticksSmallerThanTallestStick = numSticks - 1;
        for (let i = 0; i < numSticksSmallerThanTallestStick; i++) {
            totalCombinationsOfSmallerSticks += dfs(numSticks - 1, numSticksToBeVisible);
        }   */
        
        const allCombinations = totalCombinationsPickingTallestStick + totalCombinationsOfSmallerSticks;
        
        // store the result into the memo so we don't need to compute this combination again
        return memo[numSticks][numSticksToBeVisible] = allCombinations % 1000000007;
    }
    return dfs(n, k);
};
```