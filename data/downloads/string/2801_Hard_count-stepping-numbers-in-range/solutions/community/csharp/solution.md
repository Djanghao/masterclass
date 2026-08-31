# C# || DP Solution

**Author:** vdmhunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3838622/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3838622/)

---

```
public class Solution
{
    private const int Mod = 1_000_000_007;
    private readonly int[,] _dp = new int[101, 10];

    public int CountSteppingNumbers(string low, string high)
    {
        return (Mod + Count(high) - Count(low) +
                (low.Skip(1).Zip(low, (a, b) => Math.Abs(a - b) == 1).All(x => x) ? 1 : 0)) % Mod;
    }

    private int Count(string n)
    {
        var result = 0;

        for (var sz = 1; sz <= n.Length; sz++)
            for (var d = 1; d <= 9; d++)
                result = (result + Dfs(sz, d, n, sz == n.Length)) % Mod;

        return result;
    }

    private int Dfs(int i, int p, string n, bool lim)
    {
        if (p < 0 || p > 9 || lim && p > n[^i] - '0')
            return 0;

        if (i == 1)
            return 1;

        lim &= p == n[^i] - '0';

        if (lim)
            return (Dfs(i - 1, p - 1, n, lim) + Dfs(i - 1, p + 1, n, lim)) % Mod;

        if (_dp[i, p] == 0)
            _dp[i, p] = (1 + Dfs(i - 1, p - 1, n, lim) + Dfs(i - 1, p + 1, n, lim)) % Mod;

        return _dp[i, p] - 1;
    }
}

```