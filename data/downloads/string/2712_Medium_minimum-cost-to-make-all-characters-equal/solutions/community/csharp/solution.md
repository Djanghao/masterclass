# C#: Prefix Sum

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3573077/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3573077/)

---

# Intuition
Use prefix sum.

# Approach
Create 2 arrays of type long of size `s.Length` - `left` and `right`. Then fill these arrays from start to finish and from finish to start accordingly:
```
for (int i = 0; i < s.Length - 1; i++)
{
    if (s[i] != s[i + 1])
    {
        left[i] = i + 1;
    }
    if (0 < i) left[i] += left[i - 1];
}
...
for (int i = s.Length - 1; i > 0; i--)
{
    if (s[i] != s[i - 1])
    {
        right[i] = s.Length - i;
    }
    if (i < s.Length - 1) right[i] += right[i + 1];
}
```
In the final cycle find the minimum result:
```
for (int i = 1; i < s.Length - 1; i++)
{
    var rs0 = left[i - 1] + right[i + 1];
    if (rs > rs0) rs = rs0;
}
```


# Complexity
- Time complexity:
$$O(n)$$, where n is s.Length.

- Space complexity:
$$O(n)$$, where n is s.Length.

# Code
```
public class Solution {
    public long MinimumCost(string s) {
        if (s.Length == 1) return 0;
        var left = new long[s.Length];
        for (int i = 0; i < s.Length - 1; i++)
        {
            if (s[i] != s[i + 1])
            {
                left[i] = i + 1;
            }
            if (0 < i) left[i] += left[i - 1];
        }
        var right = new long[s.Length];
        for (int i = s.Length - 1; i > 0; i--)
        {
            if (s[i] != s[i - 1])
            {
                right[i] = s.Length - i;
            }
            if (i < s.Length - 1) right[i] += right[i + 1];
        }
        long rs = Math.Min(left[left.Length - 2], right[1]);
        for (int i = 1; i < s.Length - 1; i++)
        {
            var rs0 = left[i - 1] + right[i + 1];
            if (rs > rs0) rs = rs0;
        }
        return rs;
    }
}
```