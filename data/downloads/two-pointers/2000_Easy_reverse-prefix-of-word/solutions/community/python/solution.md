# Python Solution Beats 100 % time and 100 % space

**Author:** prajwal_vs
**Votes:** 22
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/1461547/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/1461547/)

---

```
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx=word.find(ch)    
        if idx:
            return word[:idx+1][::-1]+ word[idx+1:]
        return word
```