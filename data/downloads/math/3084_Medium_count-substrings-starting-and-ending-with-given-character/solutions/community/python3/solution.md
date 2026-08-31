# Python 3 || 2 lines,  simple counting || T/S: 98% / 52%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886894/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886894/)

---

```
class Solution:
    def countSubstrings(self, s: str, c: str) -> int:
        
        n = s.count(c)
      
        return n*(n+1)//2
```
[hhttps://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/submissions/1206038870/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/submissions/1206038870/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.