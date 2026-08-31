# A C# Solution

**Author:** jlccl
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/3509721/](https://leetcode.com/problems/count-binary-substrings/solutions/3509721/)

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
public class Solution {
    public int CountBinarySubstrings(string s) {
      int pre = 1, curr = 1, sum = 0;
      for (int i = 1; i < s.Length; i++)
      {
        if (s[i] == s[i - 1]) curr++;
        else
        {
          pre = curr;
          curr = 1;
        }
        if (pre >= curr) sum++;
      }
      return sum;
    }
    
}
```