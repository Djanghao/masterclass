# c#, Dynamic Programming

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/3802716/](https://leetcode.com/problems/coin-path/solutions/3802716/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a typical dynamic programming: if we know cheapest paths up to `i - 1`th position, we can easily compute the path to `i` one.

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic programming, down up 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * maxJump)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public IList<int> CheapestJump(int[] coins, int maxJump) {
        (int nextIdx, long cost)[] dp = Enumerable
            .Repeat((-1, (long) int.MaxValue), coins.Length)
            .ToArray(); 

        dp[coins.Length - 1] = (coins.Length, 0);
        
        for (int i = coins.Length - 2; i >= 0; --i) {
            if (coins[i] == -1)
                continue;
            
            for (int j = i + 1; j <= Math.Min(i + maxJump, coins.Length - 1); ++j)
                if (dp[j].cost != int.MaxValue && coins[j] != -1)
                    if (dp[i].cost > dp[j].cost + coins[j])
                        dp[i] = (j, dp[j].cost + coins[j]);
        }
            
        if (dp[0].cost == int.MaxValue)
            return new List<int>();
        
        IList<int> result = new List<int>();
        
        for (int k = 0; k != coins.Length; k = dp[k].nextIdx) 
            result.Add(k + 1);
        
        return result;
    }
}
```