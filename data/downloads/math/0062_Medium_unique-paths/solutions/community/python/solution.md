# Python easy to understand solutions (math, dp O(m*n) and O(n) space).

**Author:** OldCodingFarmer
**Votes:** 97
**Link:** [https://leetcode.com/problems/unique-paths/solutions/22975/](https://leetcode.com/problems/unique-paths/solutions/22975/)

---

        
    # math C(m+n-2,n-1)
    def uniquePaths1(self, m, n):
        if not m or not n:
            return 0
        return math.factorial(m+n-2)/(math.factorial(n-1) * math.factorial(m-1))
     
    # O(m*n) space   
    def uniquePaths2(self, m, n):
        if not m or not n:
            return 0
        dp = [[1 for _ in xrange(n)] for _ in xrange(m)]
        for i in xrange(1, m):
            for j in xrange(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        return dp[-1][-1]
    
    # O(n) space 
    def uniquePaths(self, m, n):
        if not m or not n:
            return 0
        cur = [1] * n
        for i in xrange(1, m):
            for j in xrange(1, n):
                cur[j] += cur[j-1]
        return cur[-1]