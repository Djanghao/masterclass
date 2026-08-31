# Python 3   ||   7 lines,  dp    ||   T/S: 96% / 51%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/4019256/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/4019256/)

---

```
class Solution:
    def countPalindromicSubsequences(self, s: str) -> int:

        @lru_cache(None)
        def dp(left: int, rght: int, res = 0):

            for ch in 'abcd':

                l, r = s.find(ch,left,rght), s.rfind(ch,left,rght)
                
                res+= 0 if l==-1 else 1 if l==r else dp(l+1,r)+2

            return res %1_000_000_007

        return dp(0,len(s))
```
[https://leetcode.com/problems/count-different-palindromic-subsequences/submissions/1044092367/?submissionId=1044080869](https://leetcode.com/problems/count-different-palindromic-subsequences/submissions/1044092367/?submissionId=1044080869)



I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*^2), in which *N* ~ `len(s)`.