# C# Solution

**Author:** agent_D
**Votes:** 1
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3677215/](https://leetcode.com/problems/tallest-billboard/solutions/3677215/)

---

# My Solution
```
public class Solution {
    public int TallestBillboard(int[] rods) {
        int sum = rods.Sum();

        int[] dp = new int[sum + 1];
        for (int i = 1; i <= sum; i++)
            dp[i] = -1;

        foreach (int rod in rods)
        {
            int[] dpClone = (int[])dp.Clone();
            for (int i = 0; i <= sum - rod; i++)
            {
                if (dpClone[i] < 0)
                    continue;

                dp[i + rod] = Math.Max(dp[i + rod], dpClone[i]);
                dp[Math.Abs(i - rod)] = Math.Max(dp[Math.Abs(i - rod)], dpClone[i] + Math.Min(i, rod));
            }
        }

        return dp[0];
    }
}
```