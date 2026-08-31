# C# Two Pointers + Binary Search

**Author:** justunderdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3174248/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3174248/)

---

$$n = length(s)$$
$$m = length(t)$$

# Complexity
- Time complexity: $$O((n + m) * log(m))$$
- Space complexity: $$O(m)$$

# Code
```
public class Solution
{
    public int MinimumScore(string s, string t)
    {
        int n = s.Length;
        int m = t.Length;
            
        var list = FindSubsequence(s, n, t, m);

        if (list.Count > 0 && list[list.Count - 1].Item1 == m)
        {
            return 0;
        }

        int min = m;
            
        int i = n - 1;
        int j = m - 1;
        for (int right = m - 1; right >= 0; right--)
        {
            while (i >= 0 && j > right)
            {
                if (s[i] == t[j])
                {
                    j--;
                }

                i--;
            }

            if (j <= right)
            {
                min = Math.Min(min, right + 1);

                if (list.Count > 0 && list[0].Item2 <= i)
                {
                    int start = 0;
                    int end = list.Count - 1;
                    
                    int mid;
                    while (start < end)
                    {
                        mid = start + (end - start + 1) / 2;
                        
                        if (list[mid].Item2 <= i)
                        {
                            start = mid;
                        }
                        else
                        {
                            end = mid - 1;
                        }
                    }
                    
                    min = Math.Min(min, right - list[start].Item1 + 1);
                }
            }
        }
            
        return min;
    }

    private IList<(int, int)> FindSubsequence(string s, int n, string t, int m)
    {
        var result = new List<(int, int)>();
            
        int i = 0;
        int j = 0;

        while (i < n && j < m)
        {
            if (s[i] == t[j])
            {
                result.Add((++j, i));
            }

            i++;
        }

        return result;
    }
}
```