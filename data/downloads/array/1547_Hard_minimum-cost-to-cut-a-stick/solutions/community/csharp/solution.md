# C# DP

**Author:** Dmitriy-Maksimov
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3570019/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3570019/)

---

# Approach
- Build a `dp` array where `dp[i][j]` is the minimum cost to achieve all - the cuts between `i` and `j`.
- When you try to get the minimum cost between `i` and `j`, try all possible cuts `k` between them, `dp[i][j] = min(dp[i][k] + dp[k][j]) + (j - i)` for all possible cuts k between them.


# Code
```
public class Solution
{
    public int MinCost(int n, int[] cuts)
    {
        Array.Sort(cuts);
        var m = cuts.Length;
        var dp = new int[m + 2, m + 2];

        for (var l = 2; l <= m + 1; l++)
        {
            for (var i = 0; i + l <= m + 1; i++)
            {
                var j = i + l;
                dp[i, j] = int.MaxValue;
                for (var k = i + 1; k < j; k++)
                {
                    dp[i, j] = Math.Min(dp[i, j], dp[i, k] + dp[k, j]);
                }

                var left = i == 0 ? 0 : cuts[i - 1];
                var right = j == m + 1 ? n : cuts[j - 1];
                dp[i, j] += right - left;
            }
        }

        return dp[0, m + 1];
    }
}
```