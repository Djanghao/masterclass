# 🐌 C# - simple top down and bottom up

**Author:** user7166Uf
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2088288/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2088288/)

---

Top down
```
public class Solution
{
    public int MaximumScore(int[] nums, int[] multipliers)
    {
        int m = multipliers.Length;
        int?[,] dp = new int?[m, m];
        return Backtracking(0, 0);

        int Backtracking(int left, int index)
        {
            if (index == m) return 0;

            int right = nums.Length - 1 - index + left;
            return dp[left, index] ??= Math.Max(
                nums[left] * multipliers[index] + Backtracking(left + 1, index + 1),
                nums[right] * multipliers[index] + Backtracking(left, index + 1)
            );
        }
    }
}
```

Bottom up
```
public class Solution
{
    public int MaximumScore(int[] nums, int[] multipliers)
    {
        int m = multipliers.Length;
        int[,] dp = new int[m + 1, m + 1];

        for (int index = m - 1; index >= 0; index--)
        {
            for (int left = index; left >= 0; left--)
            {
                int right = nums.Length - 1 - index + left;
                dp[index, left] = Math.Max(
                    nums[left] * multipliers[index] + dp[index + 1, left + 1],
                    nums[right] * multipliers[index] + dp[index + 1, left]
                );
            }
        }

        return dp[0, 0];
    }
}
```