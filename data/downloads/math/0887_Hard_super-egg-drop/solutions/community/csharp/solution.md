# With Explanation | DP

**Author:** shreymehul
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/5396366/](https://leetcode.com/problems/super-egg-drop/solutions/5396366/)

---

https://www.youtube.com/watch?v=xsOCvSiSrSs&t=1s&ab_channel=JamesTanton
# Complexity
- Time complexity:
O(n*k)

- Space complexity:
O(k)

# Code
```
public class Solution {
    public int SuperEggDrop(int k, int n) {
        // dp[i,j] represents the minimum number of moves needed to determine the critical floor
        // with i moves and j eggs
        int[,] dp = new int[n+1, k+1];

        // Iterate over the number of moves
        for (int i = 1; i <= n; i++) {
            // Iterate over the number of eggs
            for (int j = 1; j <= k; j++) {
                if (i == 1) {
                    // If there's only one move, only one trial is needed
                    dp[i, j] = 1;
                } else if (j == 1) {
                    // If there's only one egg, trials equal to floors because we can only drop from each floor sequentially
                    dp[i, j] = i;
                } else {
                    // Use the formula to fill in the array
                    // dp[i-1,j-1] + dp[i-1,j] + 1
                    dp[i, j] = dp[i - 1, j - 1] + dp[i - 1, j] + 1;
                }
            }
            // If the number of moves with k eggs is greater than or equal to n floors, return the number of moves
            if (dp[i, k] >= n) {
                return i;
            }
        }

        // In case we iterate through all possible moves without finding a solution, return n
        return n;
    }
}

```

```
public class Solution {
    public int SuperEggDrop(int k, int n) {
        // dp[j] represents the number of floors that can be checked with j eggs and i moves
        int[] dp = new int[k + 1];
        int moves = 0;

        // Continue until the number of floors checked with k eggs is less than n
        while (dp[k] < n) {
            moves++;
            // Update the dp array from back to front to reuse the array correctly
            for (int j = k; j > 0; j--) {
                dp[j] = dp[j] + dp[j - 1] + 1;
            }
        }

        return moves;
    }
}

```