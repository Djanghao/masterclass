# Python two pointer

**Author:** dhanu084
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/2299669/](https://leetcode.com/problems/valid-palindrome-iv/solutions/2299669/)

---

```
def makePalindrome(self, s: str) -> bool:
        mismatch = 0
        
        i,j = 0,len(s)-1
        
        while i<j:
            if s[i]!=s[j]:
                mismatch+=1
            i+=1
            j-=1
            
            if mismatch>2:
                return False
        return True
```
**Time Complexity** : O(N)
**Space Complexity**: O(1)