# short and simple solution every beginer will unserstand different approach

**Author:** Sajal_
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4544159/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4544159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
easy approach for every language 
# Approach
37 ms
Beats 95.36% of users with Python3
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        temp = '01'
        while temp in s:
            temp = '0' + temp + '1'
        return len(temp) - 2
```