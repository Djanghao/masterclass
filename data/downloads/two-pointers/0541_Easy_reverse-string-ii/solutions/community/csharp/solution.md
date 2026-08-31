# C# 解決方案

**Author:** z087757775
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/6022341/](https://leetcode.com/problems/reverse-string-ii/solutions/6022341/)

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
```csharp []
public class Solution {
    public string ReverseStr(string s, int k) {
            char[] charArray = s.ToCharArray();

            for(int i = 0; i < charArray.Length; i += 2 * k)
            {
                int end = Math.Min(i + k, charArray.Length);
                Array.Reverse(charArray, i, end - i);                         
            }
            return new string(charArray);
    }
}
```