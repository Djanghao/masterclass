# 521: Time 91.38% and Space 94.99%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3289203/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3289203/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Check if both strings a and b are equal. If they are, then there is no uncommon subsequence between them, so return -1.
2. If both strings a and b are not equal, then the longest uncommon subsequence would be the longest string among a and b. Because any subsequence of the longer string that is also a subsequence of the shorter string cannot be uncommon. Hence, return the length of the longest string between a and b.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findLUSlength(self, a: str, b: str) -> int:
        # Check if both strings are equal
        if a == b:
            return -1
        else:
            # Return the length of the longest string between a and b
            return max(len(a), len(b))

```