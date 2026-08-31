# Simple solution

**Author:** EVikVik
**Votes:** 6
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/359418/](https://leetcode.com/problems/sentence-similarity/solutions/359418/)

---

```
class Solution:
    def areSentencesSimilar(self, words1: List[str], words2: List[str], pairs: List[List[str]]) -> bool:
        if len(words1) != len(words2):
            return False
        
        for w1, w2 in zip(words1, words2):
            if w1 == w2:
                continue
            if not ([w1, w2] in pairs or [w2, w1] in pairs):
                return False
        
        return True
```