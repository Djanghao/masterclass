# [Python3] greedy

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/888981/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/888981/)

---


```
class Solution:
    def checkPalindromeFormation(self, a: str, b: str) -> bool:
        
        fn = lambda x: x == x[::-1] # check for palindrome 
        
        i = 0
        while i < len(a) and a[i] == b[~i]: i += 1
        if fn(a[:i] + b[i:]) or fn(a[:-i] + b[-i:]): return True 
        
        i = 0
        while i < len(a) and a[~i] == b[i]: i += 1
        if fn(b[:i] + a[i:]) or fn(b[:-i] + a[-i:]): return True 
        
        return False 
```