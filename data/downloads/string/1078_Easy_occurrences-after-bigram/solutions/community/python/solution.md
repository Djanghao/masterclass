# Simple Python Solution

**Author:** ashmit007
**Votes:** 5
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/311182/](https://leetcode.com/problems/occurrences-after-bigram/solutions/311182/)

---

```
class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        third = []
        sen = list(text.split())
        for i in range(1, len(sen)-1):
            if sen[i-1] == first and sen[i] == second:
                third.append(sen[i+1])
        return third
```