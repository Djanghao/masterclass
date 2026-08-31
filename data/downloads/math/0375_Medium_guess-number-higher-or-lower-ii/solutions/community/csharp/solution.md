# 🎯 C# Dynamic Programming

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5922793/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5922793/)

---

# Intuition
The problem asks us to determine the minimum amount of money required to guarantee a win in a guessing game. The idea is to minimize the maximum loss in the worst-case scenario. We will use dynamic programming to store intermediate results and build the solution bottom-up.

# Approach
We will use a 2D array `dp` where `dp[i][j]` represents the minimum amount of money required to guarantee a win if we need to guess a number between `i` and `j`. For each range, we try choosing a number `k` as the guess, and the cost would be `k + max(dp[i][k-1], dp[k+1][j])`, representing the worst-case scenario. We take the minimum of all such worst-case costs to fill up the `dp` table.

### Steps:
1. Initialize a 2D `dp` array of size `[n+1][n+1]`.
2. For each possible range `[i, j]`, iterate over all possible guesses `k`.
3. For each guess `k`, compute the cost as `k + max(dp[i][k-1], dp[k+1][j])`.
4. The final answer is stored in `dp[1][n]`, where `n` is the maximum number.

# Complexity
- **Time complexity**: 
   $$O(n^3)$$, where `n` is the number of possible numbers. This is because we are iterating over all pairs `(i, j)` and for each pair, iterating over possible guesses `k`.
  
- **Space complexity**:
   $$O(n^2)$$ because we are using a 2D array to store the results for all subproblems.

# Code
```csharp []
public class Solution {
    public int GetMoneyAmount(int n) {
        var dp = new int[n+1,n+1];

        for (int i = 1; i <= n; i++)
        {
            for (int j = i; j > 0; j--)
            {
                if (i != j)
                    dp[i, j] = int.MaxValue;

                for (int k = j; k < i; k++)
                {
                    dp[i,j] = Math.Min(dp[i,j], k + Math.Max(dp[i,k+1], dp[k-1,j]));
                }
            }
        }

        return dp[n,1];
    }
}
```