# [Python3] one line

**Author:** ye15
**Votes:** 47
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636348/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636348/)

---

A few string operations chained together to get the job done. 

```
class Solution:
    def arrangeWords(self, text: str) -> str:
        return " ".join(sorted(text.split(), key=len)).capitalize()
```