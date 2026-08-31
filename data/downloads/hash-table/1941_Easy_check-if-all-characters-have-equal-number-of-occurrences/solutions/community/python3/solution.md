# [Python3] 1-line

**Author:** ye15
**Votes:** 48
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1359715/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1359715/)

---


```
class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        return len(set(Counter(s).values())) == 1
```