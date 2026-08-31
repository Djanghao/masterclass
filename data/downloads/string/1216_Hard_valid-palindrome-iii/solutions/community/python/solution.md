# Python - Quick Solution during interview

**Author:** dpark068
**Votes:** 34
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/804788/](https://leetcode.com/problems/valid-palindrome-iii/solutions/804788/)

---

I admit its not the fastest algo for this problem but, if I was in an interview this is probably how I would solve it. Building off the prior palindrome problems, would just try different iterations and see which one works. Use LRU cache for caching already seen input/output.

Idea:
If you see two letters that are not equal, you know one of them must be deleted, so lets just try recursing into both ways (choice restriction is 2).

Time Complexity: O(n^2) Since we have two choices and we are not re computing already seen choices.
```
class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        if s == s[::-1]: return True
        
        @lru_cache(None)
        def validPalindrome(s,l,r,numOfChoices):
            nonlocal k
            while l < r:
                if s[l] == s[r]:
                    l+=1
                    r-=1
                else:
                    if numOfChoices <k:
                        return validPalindrome(s,l+1,r,numOfChoices+1) or validPalindrome(s,l,r-1,numOfChoices+1)
                    elif numOfChoices ==k:  #cannot afford more mistakes
                        return False
            
            return True
            
        
        return validPalindrome(s,0,len(s)-1,0)
```