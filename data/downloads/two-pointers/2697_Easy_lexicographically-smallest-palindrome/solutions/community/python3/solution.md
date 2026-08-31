# Python Elegant & Short | O(n) | 4 Lines

**Author:** Kyrylo-Ktl
**Votes:** 16
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3549244/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3549244/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        letters = list(s)

        for i in range(len(s) // 2):
            letters[i] = letters[~i] = min(letters[i], letters[~i])

        return ''.join(letters)

```