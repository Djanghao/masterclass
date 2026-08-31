# Python | Simplified Solution | 94% faster

**Author:** SathyaRaj_03
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/2590973/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/2590973/)

---

```
class Solution:
    def beautySum(self, s: str) -> int:
        beauty=0
        for i in range(len(s)-2):
            Freq={}
            for j in range(i,len(s)):
                Freq.setdefault(s[j],0)
                Freq[s[j]]+=1
                beauty+=max(Freq.values())-min(Freq.values())
        return beauty