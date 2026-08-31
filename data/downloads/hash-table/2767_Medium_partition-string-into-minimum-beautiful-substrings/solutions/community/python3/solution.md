# Python 3   ||   6 lines,  dp   ||   T/S: 96%  /  92%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3738602/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3738602/)

---

```
powers = tuple(bin(pow(5,i))[2:] for i in range(7))

class Solution:
    def minimumBeautifulSubstrings(self, s: str) -> int:

        def dp(s):
            if s in powers: return 1 
            if not s: return inf
            
            return 1+ min((dp(s[len(p):]) for p in powers
                            if s.startswith(p)), default = inf)

        ans = dp(s)

        return ans if ans != inf else -1
```
[https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/submissions/1292636785/
](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/submissions/1292636785/
)

I could be wrong, but I think that (worst-case) time complexity is *O*(2^*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.