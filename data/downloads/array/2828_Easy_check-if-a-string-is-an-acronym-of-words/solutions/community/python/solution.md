# Python3 Solution

**Author:** Motaharozzaman1996
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3936904/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3936904/)

---


```
class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        ans=""
        for word in words:
            ans+=word[0]

        return ans==s    
```