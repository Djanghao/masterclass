# [Python3] 99.60% Fast Solution

**Author:** VoidCupboard
**Votes:** 29
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1219040/](https://leetcode.com/problems/sorting-the-sentence/solutions/1219040/)

---

```
class Solution:
    def sortSentence(self, s: str) -> str:
        arr = [i[-1] + i[:-1] for i in s.split()]
        
        arr.sort()
        
        ans = ""
        for i in arr:
            ans += i[1:] + ' '
        
        return ans[:-1]
```