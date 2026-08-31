# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/5281819/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/5281819/)

---

# Solution 1 : Memoization Method

### Complexity
- Time complexity:
O(n2)

- Space complexity:
O(n)

### Code
```
public class Solution {
    public int MinimumCoins(int[] prices) {
        var dp = new int[prices.Length, 2];
        for(int idx = 0; idx < prices.Length; idx++)
            dp[idx, 0] = dp[idx, 1] = -1;

        return MinimumCoinsUntil(prices, dp, 0, 0);
    }

    public int MinimumCoinsUntil(int[] prices, int[,] dp, int idx, int canBeFree) {
        if(idx >= prices.Length)
            return 0;

        if(dp[idx, canBeFree] != -1)
            return dp[idx, canBeFree];

        var purchased = int.MaxValue;
        var notPurchased = int.MaxValue;

        for(int i = 0; i <= idx; i++)
            purchased = Math.Min(purchased, prices[idx] + MinimumCoinsUntil(prices, dp, i + idx + 1, 1));
        
        if(canBeFree == 1)
            notPurchased = MinimumCoinsUntil(prices, dp, 1 + idx, 0);
        
        dp[idx, canBeFree] = Math.Min(purchased, notPurchased);
        return dp[idx, canBeFree];
    }
}
```

# Solution 2 : Tabulation Method

### Complexity
- Time complexity:
O(n2)

- Space complexity:
O(n)

### Code
```
public class Solution {
    public int MinimumCoins(int[] prices) {
        var dp = new int[prices.Length, 2];

        for(int idx = prices.Length - 1; idx >= 0; idx--) {
            dp[idx, 0] = int.MaxValue;
            for(int i = 0; i <= idx; i++) {
                var temp = idx + i + 1 >= prices.Length ? 0 : Math.Min(dp[idx + i + 1, 0], dp[idx + i + 1, 1]);
                dp[idx, 0] = Math.Min(dp[idx, 0], prices[idx] + temp);
            }

            dp[idx, 1] = idx + 1 == prices.Length ? 0 : dp[idx + 1, 0];
        }

        return dp[0, 0];
    }
}
```