# Python 3   ||   1 line,  join()   ||   T/S: 78% / 98%

**Author:** Spaulding_
**Votes:** 19
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934500/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3934500/)

---

```
class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:

        return ''.join(word[0] for word in words) == s
```
[https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1292624706/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/submissions/1292624706/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(words)`.