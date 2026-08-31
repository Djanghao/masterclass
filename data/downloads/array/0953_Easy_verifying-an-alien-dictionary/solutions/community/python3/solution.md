# Python One Liner - Just sort the list according the custom alphabet

**Author:** ashishpawar517
**Votes:** 30
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/801754/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/801754/)

---

See the following code
```
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        return words == sorted(words,key=lambda word:[order.index(c) for c in word])
        
```