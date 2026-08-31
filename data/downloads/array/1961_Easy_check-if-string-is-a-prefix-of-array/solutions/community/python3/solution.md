# [Python3] move along s

**Author:** ye15
**Votes:** 25
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390199/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390199/)

---


```
class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        i = 0
        for word in words: 
            if s[i:i+len(word)] != word: return False 
            i += len(word)
            if i == len(s): return True 
        return False 
```

The solutions for weekly 255 can be found in this [commit](https://github.com/gaosanyong/leetcode/commit/312849ed66e5ad76fa278cbb34dd57772fb3ceeb).