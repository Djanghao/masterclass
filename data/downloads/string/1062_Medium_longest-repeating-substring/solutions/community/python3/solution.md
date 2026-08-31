# Super simple python solution O(1) space O(n) time

**Author:** MelodyW
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/5242631/](https://leetcode.com/problems/longest-repeating-substring/solutions/5242631/)

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
class Solution:
    def longestRepeatingSubstring(self, s: str) -> int:
        n = len(s)
        ans = 0
        for i in range(1,n):
            if s[i-ans:i+1] in s[:i]: ans+=1
        return ans
        
```