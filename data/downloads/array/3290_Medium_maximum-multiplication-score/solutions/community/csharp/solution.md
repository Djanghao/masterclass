# C#| O(N) Simple dynamic programming

**Author:** bora_marian
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5803979/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5803979/)

---

# Intuition
N^4 solution gets TLE(Time Limit Exeded) so dynamic programming should be used to calculate for each position i what it means to be chosen as j element of the equation: $$a[0] * b[j0] + a[1] * b[j1] + a[2] * b[j2] + a[3] * b[j3] $$
It results that $$dp[i][j] = max(dp[k][j-1]) + b[i] * a[j]$$, for each k in [0, i-1].
From the expression of $$dp[i][j]$$ we can deduct is sufficient to keep the maximum values for each j chosen elements, calculated for $$[0, i-1]$$.
# Approach
The code is iterating the j from 4 down to 1 to avoid mixing the calculations for the current i with the previous 0,1..i-1 calculations

# Complexity
- Time complexity:$$O(N)$$

- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution {
    public long MaxScore(int[] a, int[] b) {
        long[] dp = new long[5];
        dp[0] = 0; // no chosen elements result is 0
        for (int j = 1; j <= 4; j++) 
            dp[j] = long.MinValue;
        long result = long.MinValue;
        for (int i = 0; i < b.Length; i++) {
            for (int j = 4; j >= 1; j--) {
                if (j > (i + 1)) continue;
                dp[j] = Math.Max(dp[j-1] + b[i] * (long)a[j-1], dp[j]);     
                if (j == 4) {
                    result = Math.Max(result, dp[j]);
                }
            }
        }
        return result;
    }
}
```