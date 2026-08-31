# [python] Simple DP solution, with explanation and example stack trace

**Author:** 101leetcode
**Votes:** 30
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/672851/](https://leetcode.com/problems/valid-palindrome-iii/solutions/672851/)

---

```
class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        ## RC ##
        ## APPROACH : DP ##
        ## LOGIC ##
        ## 1. Draw Bottom Up DP Table
        ##      a) when length == 1, no change required, so dp[i][j] = 0
        ##      b) when length == 2, if string is aa or bb, we donot require any k, so take previous substring value i.e from diagonal. else we take as 1. i.e we require 1 char to change
        ##      c) when length > 2, we can generalize it as, if s[i] == s[j] then we can remove ith character which requires one operation and take previous s[i+1][j] value or 1 + dp[i][j-1] or we remove both chars take previous substring i.e 2 + dp[i+1][j-1]
        
        ##  STACK TRACE ##
        ## EXAMPLE : BACABAAA ##
        # [
        #     [0, 1, 2, 1, 0, 1, 2, 3], 
        #     [0, 0, 1, 0, 1, 2, 1, 2], 
        #     [0, 0, 0, 1, 2, 1, 2, 2], 
        #     [0, 0, 0, 0, 1, 0, 1, 1], 
        #     [0, 0, 0, 0, 0, 1, 1, 1], 
        #     [0, 0, 0, 0, 0, 0, 0, 0], 
        #     [0, 0, 0, 0, 0, 0, 0, 0], 
        #     [0, 0, 0, 0, 0, 0, 0, 0]
        # ]

        
        dp = [ [0 for _ in s ] for _ in s]
        
        for i in range(len(dp)-1, -1, -1):
            for j in range(i+1,len(dp)):
                if s[i] == s[j]:
                    dp[i][j] = dp[i+1][j-1]
                else:
                    dp[i][j] = min( 1+dp[i][j-1], 1+dp[i+1][j], 2+dp[i+1][j-1] )
        # print(dp)
        return dp[0][-1] <= k

```