# C# + Bitmask + dp

**Author:** tibnewusa
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3653370/](https://leetcode.com/problems/special-permutations/solutions/3653370/)

---



# Code
```
public class Solution {
    public int Mod = 1000000000 + 7;
    public int [][] dp;
    public int SpecialPerm(int[] nums) {
        dp = Enumerable.Range(1, nums.Length + 1).Select(x => Enumerable.Repeat(-1, 1 << nums.Length).ToArray()).ToArray();
        return dfs(nums, -1, 0);
    }
    public int dfs(int[] nums, int prevIndex, int mask)
    {
        if (mask == (1 << nums.Length) - 1) return 1;

        if (dp[prevIndex + 1][mask] != -1) return dp[prevIndex + 1][mask];

        var res = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            if ((mask & (1 << i)) > 0) continue;

            if (prevIndex == - 1 || nums[prevIndex] % nums[i] == 0 || nums[i] % nums[prevIndex] == 0)
            {
                res += dfs(nums, i, mask | (1 << i));
                res %= Mod;
            }

        }
        dp[prevIndex + 1][mask] = res;
        return res;
    }
}
```