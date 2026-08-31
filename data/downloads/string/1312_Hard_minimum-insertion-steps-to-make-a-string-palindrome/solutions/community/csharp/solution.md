# C# Using Longest Palindromic Subsequence

**Author:** Dmitriy-Maksimov
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3442341/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3442341/)

---

# Approach
Using [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/).
If we know the longest palindromic sub-sequence is x and the length of the string is $$n$$ then, what is the answer to this problem? It is $$n - x$$ as we need $$n - x$$ insertions to make the remaining characters also palindrome.


# Complexity
- Time complexity: $$O(n \	imes m)$$
- Space complexity: $$O(n)$$

# Code
```
public class Solution
{
    private readonly Dictionary<(int i, int j), int> _cache = new();

    public int MinInsertions(string s)
    {
        var reversedString = string.Join("", s.Reverse());
        return s.Length - getLCS(s, 0, reversedString, 0);
    }
    
    private int getLCS(string a, int i, string b, int j)
    {
        if (i >= a.Length || j >= b.Length)
        {
            return 0;
        }

        if (_cache.TryGetValue((i, j), out var value))
        {
            return value;
        }

        if (a[i] == b[j])
        {
            return _cache[(i, j)] = 1 + getLCS(a, i + 1, b, j + 1);
        }

        return _cache[(i, j)] = Math.Max(getLCS(a, i + 1, b, j), getLCS(a, i, b, j + 1));
    }
}
```