# [python] DP, My thought process explained

**Author:** 101leetcode
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindrome-removal/solutions/656398/](https://leetcode.com/problems/palindrome-removal/solutions/656398/)

---

```
class Solution:
    def minimumMoves(self, arr: List[int]) -> int:
	"""
        ## APPROACH : DP ##
        ## INTUITION : started with dp matrix, if chars match, take dp[i-1][j-1] if they dont take 1 + max(dp[i][j-1], dp[i-1][j])
        ## This didnot work for my manual test case: 224524, where best case is 5, 424, 22
        ## But if we do only checks for i-1 and j-1 it is not enough as we are only checking sub problems (2, 24524) and (22452, 4). Here the best case comes for sub problems 22, 4524 ==> 1 + 2 = 3. ( This is when I relealized that not only dp[i-1], dp[j-1] we have to check for all (dp[i][k], dp[k+1][j]) for k in range [i,j] )        
		"""
        n = len(arr)
        dp = [[float('inf')] * n for _ in arr]
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                # to deal with even length palindrome as well, we pre fill for length 2
                if i == j or (arr[i] == arr[j] and j - i == 1 ):                              
                    dp[i][j] = 1
                    continue
                if arr[i] == arr[j]:
                    dp[i][j] = dp[i + 1][j - 1]     
                for k in range(i, j):
                    dp[i][j] = min( dp[i][j], dp[i][k] + dp[k+1][j] )
        return dp[0][n - 1]
```