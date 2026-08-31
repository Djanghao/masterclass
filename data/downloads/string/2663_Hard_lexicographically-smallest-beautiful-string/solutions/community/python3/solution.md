# [Python3] Check from Right to Left O(n)

**Author:** OmakaseLover
**Votes:** 19
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3468296/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3468296/)

---

# Approach
To make lexicographically smallest greater string, we need to check from right to left (similar to next greater integer). While traversing from right to left, we update last letter from right. While incrementing the last letter each time, we make sure that the formed string contains first $$k$$ letters and does not contain any substring as a palindrome.

# Key Observation
It is important to note that $$s$$ itself is a beautiful string, such that each time we generate a new string `s_next`, to determine whether `s_next` is a beautiful string (i.e. whether it contains any length >= 2 palindrome substring), we only need to check it _locally_.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def smallestBeautifulString(self, s: str, k: int) -> str:
        s = list(s)
        i = len(s) - 1
        s[i] = chr(ord(s[i]) + 1)
        while 0 <= i < len(s):
            if ord(s[i]) - ord('a') >= k:
                s[i] = 'a'
                i -= 1
                s[i] = chr(ord(s[i]) + 1)
            elif (i >= 1 and s[i] == s[i - 1]) or (i >= 2 and s[i] == s[i - 2]):
                s[i] = chr(ord(s[i]) + 1)
            else:
                i += 1
        return '' if i < 0 else ''.join(s)
```