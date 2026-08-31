# Python 3   ||   13 lines,  dp   ||   T/S: 76% / 97%

**Author:** Spaulding_
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/2851748/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/2851748/)

---

```
class Solution:
    def countPalindromes(self, s: str) -> int:

        ans = 0
        for n in range(100):

            dp=[0,0,0,0,0,1]

            x = str(n).rjust(2,'0')
            mask =  x+'$'+x[1]+x[0]

            for ch in s:

                if ch==mask[0]: dp[0]+=dp[1]
                if ch==mask[1]: dp[1]+=dp[2]
                dp[2]+=dp[3]
                if ch==mask[3]: dp[3]+=dp[4]
                if ch==mask[4]: dp[4]+=dp[5]

            ans+= dp[0]

        return ans%1_000_000_007
```
[https://leetcode.com/problems/count-palindromic-subsequences/submissions/1290429900/](https://leetcode.com/problems/count-palindromic-subsequences/submissions/1290429900/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.