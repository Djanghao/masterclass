# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6013093/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6013093/)

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
```csharp []
public class Solution {
    public int MaxScore(int n, int k, int[][] stayScore, int[][] travelScore) {
        int days = stayScore.Length, cities = travelScore.Length, res = 0;
        if (days != k || cities != n || n == 0 || k == 0)
            return 0;

        int[,] dp = new int[days, cities];
        int lastDay = days-1;
        for(int i = 0; i < n; i++)
        {
            dp[lastDay, i] = stayScore[lastDay][i];
            for(int j = 0; j < n; j++)
            {
                dp[lastDay, i] = Math.Max(dp[lastDay, i], travelScore[i][j]);
                if(lastDay == 0)
                    res = Math.Max(res, dp[lastDay, i]);
            }
        }

        for(int day = k-2; day >= 0; day--)
        {
            for(int src = 0; src < n; src++)
            {
                for(int dst = 0; dst < n; dst++)
                {
                    dp[day, src] =Math.Max(dp[day, src], Math.Max(stayScore[day][src] + dp[day+1, src], travelScore[src][dst]+ dp[day+1, dst]));
                }

                if(day == 0)
                    res = Math.Max(res, dp[day, src]);
            }
        }

        return res;
    }
}
```