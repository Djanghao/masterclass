# C# - [Made Simple] Iterative DP Solution

**Author:** TheSnappl
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3846241/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3846241/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
public class Solution {

    public long[] MinimumCosts(int[] regular, int[] express, int expressCost) {
        int n = regular.Length;

        long[,] dp = new long[2, n + 1];
        long[] returnArray = new long[n];

        // Initial steps
        dp[0, 0] = 0;
        dp[1, 0] = expressCost;

        // Add the rest of the steps
        for (int steps = 1; steps < n + 1; steps++){
            dp[0, steps] = regular[steps - 1] + Math.Min(dp[1, steps - 1], dp[0, steps - 1]);
            dp[1, steps] = express[steps - 1] + Math.Min(dp[1, steps - 1], dp[0, steps - 1] + expressCost);

            returnArray[steps - 1] = Math.Min(dp[0, steps], dp[1, steps]); 
        }

        return returnArray;
    }
}
```