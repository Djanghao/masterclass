# Python 3 || 2 lines,  dfs || T/S: 98% / 82%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886825/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886825/)

---


```
class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        
        pairs1, pairs2 = set(pairwise(s)), set(pairwise(s[::-1]))
        
        return pairs1 & pairs2
```
[https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/submissions/1266960535/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/submissions/1266960535/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.