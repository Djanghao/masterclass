# 🔥💥⚡My Easiest Python solution || Explained💀💯

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word/solutions/5113751/](https://leetcode.com/problems/valid-word/solutions/5113751/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-05-05 093551.png](./images/1.png)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. ***It's a very simple approach just traverse through the string and check the following descriptions --:***
- ***it has at least one vowel and one consonents.***
- ***it consits at most one upperCase or Lowercase or one digit but(any one of them will satistfy our conditions so if any of three gives True it's a valid word).***
- ***Also must check that any character of string must not  a not_allowed character if it is return False immediately ***
- ***Now Check that it must have (one vowel and one consonent) and (one digit or one uppercase or one lowercase).***
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
class Solution(object):
    def isValid(self, word):
        """
        :type word: str
        :rtype: bool
        """
        n = len(word)
        if n < 3:
            return False
        dig = '0123456789'
        uppr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        lower = 'abcdefghijklmnopqrstuvwxyz'
        vowels = 'aeiouAEIOU'
        cons = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
        not_allowed = '@$#'
        has_v = False
        has_c = False
        has_d = False
        has_up = False
        has_lo = False
        for w in word:
            if w in not_allowed:
                return False
            if w in uppr:
                has_up = True
            if w in lower:
                has_lo = True
            if w in vowels:
                has_v = True
            if w in cons:
                has_c = True
            if w in dig:
                has_d = True
        return (has_v and has_c) and (has_d or has_up or has_lo)
                
```