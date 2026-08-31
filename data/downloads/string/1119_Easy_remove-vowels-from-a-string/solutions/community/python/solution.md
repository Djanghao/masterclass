# Simple Python Solution

**Author:** 5tigerjelly
**Votes:** 16
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/336865/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/336865/)

---

```
class Solution:
    def removeVowels(self, S: str) -> str:
        s = set('aeiou')
        ret = ""
        for ch in S:
            if ch not in s:
                ret += ch
        return ret
```		