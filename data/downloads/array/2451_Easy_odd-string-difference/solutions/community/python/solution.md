# Python 3  ||   3 lines, ord   ||    T/S: 89% / 99%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2756767/](https://leetcode.com/problems/odd-string-difference/solutions/2756767/)

---

Note that words.length <= 100, so *O*(*n* log *n*) works just fine.
```
class Solution:
    def oddString(self, words: List[str]) -> str:

        diff = lambda x: [ord(x[j])-ord(x[j-1]) for j in range(1,len(x))]

        words.sort(key = diff)

        return words[0] if diff(words[0]) != diff(words[1]) else words[-1]
```
[https://leetcode.com/problems/odd-string-difference/submissions/1114190726/](https://leetcode.com/problems/odd-string-difference/submissions/1114190726/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(words)`.