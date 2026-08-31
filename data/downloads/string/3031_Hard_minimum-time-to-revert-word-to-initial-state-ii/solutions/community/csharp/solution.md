# Z-Algorithm solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4677065/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4677065/)

---

# Code
```
public class Solution 
{
    public int MinimumTimeToInitialState(string s, int k) 
    {
        int n = s.Length;
        var z = new int[s.Length];
        int l = 0, r = 0;

        for (int i = 1; i < n; i++) 
        {
            if (i < r) 
                z[i] = Math.Min(r - i, z[i - l]);

            while (i + z[i] < n && s[z[i]] == s[i + z[i]]) 
                z[i]++;

            if (i + z[i] > r) 
            {
                l = i;
                r = i + z[i];
            }
        }

        var result = 1;

        for (var i = 0; i < s.Length; i++)
            if (s.Length - z[i] == i && i % k == 0)
                return i / k;

        return (int) Math.Ceiling(s.Length / (decimal) k);
    }
}
```