# Python Easy

**Author:** lokeshsk1
**Votes:** 12
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390509/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390509/)

---

```
class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        
        a = ''
    
        for i in words:
            
            a += i
            
            if a == s:
                return True
            if not s.startswith(a):
                break
                     
        return False 
```