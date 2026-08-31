# c# Bitmask

**Author:** zloytvoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3600005/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3600005/)

---

# Intuition
Check all the subsequences to find all the polyndromes. For each pair of palindromes check if they do not overlap and then update the result accordingly.

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
    public int MaxProduct(string s) 
    {
        var n = s.Length;
        var palindromes = new Dictionary<int, int>();

        for(int i = 1; i <= (1 << n); ++i)
        {
            var sb = new StringBuilder();
            var count = 0;
            for(int j = 0; j < n; ++j)
            {
                if((i & (1 << j)) != 0)
                {
                    sb.Append(s[j]);
                    ++count;
                }
            }

            if(IsPalindrome(sb))
            {
                palindromes.Add(i, count);
            }
        }

        var result = 0;
        foreach(var (first, firstCount) in palindromes)
        {
            foreach(var (second, secondCount) in palindromes)
            {
                if((first & second) == 0)
                {
                    result = Math.Max(result, firstCount * secondCount);
                }
            }
        }

        return result;
    }

    public bool IsPalindrome(StringBuilder sb)
    {
        var m = sb.Length;
        for(int j = 0; 2*j < m; ++j)
        {
            if(sb[j] != sb[m - j - 1])
            {
                return false;
            }
        }
        return true;
    }
}
```