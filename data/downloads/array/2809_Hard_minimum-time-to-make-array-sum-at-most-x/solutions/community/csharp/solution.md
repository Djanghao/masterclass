# C# || Solution

**Author:** vdmhunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868263/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3868263/)

---

```
public class Solution
{
    public int MinimumTime(IList<int> nums1, IList<int> nums2, int x)
    {
        var n = nums1.Count;

        var p = Enumerable.Range(0, n)
            .Select(i => (a:nums1[i], b:nums2[i]))
            .OrderBy(t => t.b)
            .ToList();

        var dp = new int[n + 1];

        foreach (var (a, b) in p)
            for (var i = n - 1; i >= 0; i--)
                dp[i + 1] = Math.Max(dp[i + 1], dp[i] + (i + 1) * b + a);

        var s1 = nums1.Sum();
        var s2 = nums2.Sum();

        for (var i = 0; i <= n; i++)
            if (s2 * i + s1 - dp[i] <= x)
                return i;

        return -1;
    }
}

```