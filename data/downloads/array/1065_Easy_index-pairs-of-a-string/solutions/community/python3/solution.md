# Easy to understand python solution

**Author:** jobseekers
**Votes:** 6
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/303567/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/303567/)

---

```
class Solution:
    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:
        res = []
        
        for i in range(len(text)):
            for j in range(i,len(text)):
                if text[i:j+1] in words:
                    res.append([i,j])
        return res
```