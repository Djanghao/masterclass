# C# 100%

**Author:** pcontrerasp
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/4556008/](https://leetcode.com/problems/valid-palindrome-iv/solutions/4556008/)

---

# Intuition
Two pointers.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution 
{
    public bool MakePalindrome(string s)
    {
        var n = s.Length;
        var ops = 0;
        for(int i = 0, j = n - 1; i < j; ++i, --j)
        {
            if (s[i] != s[j])
            {
                ++ops;
            }
        }    
        return ops < 3;
    }
}
```