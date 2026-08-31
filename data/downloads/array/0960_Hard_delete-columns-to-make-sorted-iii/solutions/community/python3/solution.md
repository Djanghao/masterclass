# Python 3   ||   6 lines,  dp  ||   T/S: 75% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3924301/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/3924301/)

---

```
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:

        n = len(strs[0])

        isValid = lambda x: all(s[x] <= s[j] for s in strs)

        dp = [1] * n

        for j in range(1, n):

            dp[j] = max((dp[x] for x in 
                         filter(isValid,range(j))), default = 0) + 1
        
        return n - max(dp)
```
[https://leetcode.com/problems/delete-columns-to-make-sorted-iii/submissions/1024237785/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/submissions/1024237785/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*N*), in which *N* ~ `len(strs)` and *M* ~ `len(strs[0])`.