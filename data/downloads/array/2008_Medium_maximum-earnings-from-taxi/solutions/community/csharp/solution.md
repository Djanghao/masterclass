# Using Dictionary

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4852603/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4852603/)

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
public class Solution {
    public long MaxTaxiEarnings(int n, int[][] rides) {
        Dictionary<int, List<(int, int)>> d = new ();
        for(int i=0; i<rides.Length; i++)
        {
            int s = rides[i][0];
            int e = rides[i][1];
            int t = rides[i][2];
            if (!d.ContainsKey(e))
            {
                d[e] = new List<(int, int)>();
            }
            d[e].Add((s, t));
        }
        long[] dp = new long[n+1];
        dp[1] = 0;
        for(int i=2; i<=n; i++)
        {
            if (d.ContainsKey(i))
            {
                List<(int, int)> l = d[i];
                foreach((int, int) a in l)
                {
                    int s = a.Item1;
                    int t = a.Item2;
                    dp[i] = (long)Math.Max(dp[i], (long)dp[s] + (long)i-(long)s+(long)t);
                }
            }
            dp[i] = (long)Math.Max(dp[i], dp[i-1]);
        }
        return dp[n];
    }
}
```