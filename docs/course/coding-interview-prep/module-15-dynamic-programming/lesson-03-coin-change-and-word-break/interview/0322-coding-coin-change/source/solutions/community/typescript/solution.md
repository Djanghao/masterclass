# Coin Change

**Author:** zpbximaw
**Votes:** 3
**Link:** [https://leetcode.com/problems/coin-change/solutions/4642630/](https://leetcode.com/problems/coin-change/solutions/4642630/)

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
function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
  dp[0] = 0; // To make 0, we need 0 coins.
  for (let coin of coins) { // Check each coin
    for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
```