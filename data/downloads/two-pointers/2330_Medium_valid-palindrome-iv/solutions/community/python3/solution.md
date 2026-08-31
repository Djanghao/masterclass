# Python two pointers

**Author:** nanzhuangdalao
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/4080132/](https://leetcode.com/problems/valid-palindrome-iv/solutions/4080132/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The operation only includes "change". So simply count the number of times when the palindrome characteristic is violated.

# Code 1
```
class Solution:
    def makePalindrome(self, s: str) -> bool:
        count = 0
        p1 = 0
        p2 = len(s) - 1

        while p1 < p2:
            if s[p1] == s[p2]:
                p1 += 1
                p2 -= 1
            else:
                count += 1
                p1 += 1
                p2 -= 1
        
        return count <= 2
        
```
# Code 2 (early termination)
```
class Solution:
    def makePalindrome(self, s: str) -> bool:
        count = 0
        p1 = 0
        p2 = len(s) - 1

        while p1 < p2:
            if s[p1] == s[p2]:
                p1 += 1
                p2 -= 1
            else:
                count += 1
                p1 += 1
                p2 -= 1
                if count > 2:
                    return False
        return True
        
```
# Code 3 - cleaner
```
class Solution:
    def makePalindrome(self, s: str) -> bool:
        count = 0
        p1 = 0
        p2 = len(s) - 1
        while p1 < p2:
            if s[p1] != s[p2]:
                count += 1
                if count > 2:
                    return False
            p1 += 1
            p2 -= 1
        return True
```