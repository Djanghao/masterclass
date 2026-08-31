# C# Best Solution.

**Author:** Ebrahem-Outlook
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5227155/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5227155/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
    public bool IsPrefixString(string s, string[] words)
    {
        StringBuilder str = new StringBuilder();

        foreach (string word in words)
        {
            str.Append(word);
            if (str.ToString() == s) return true;
        }    

        return false;
    }
}
```