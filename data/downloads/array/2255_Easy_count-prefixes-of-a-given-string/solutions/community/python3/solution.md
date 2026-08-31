# Easy python solution

**Author:** _tusharkhanna575
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/2076295/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/2076295/)

---

```
class Solution:
    def countPrefixes(self, words: List[str], s: str) -> int:
        count=0
        for i in words:
            if (s[:len(i)]==i):
                count+=1
        return count
```