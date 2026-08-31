# [Python] Recursive and DP, with trick to reduce to O(n) space and save memory

**Author:** modusV
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/974918/](https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/974918/)

---

##### Recursive with memoization, TLE

```
class Solution:

    # TLE
    def waysToDistribute(self, n: int, k: int) -> int:
        @functools.cache
        def solve(n, k):
            if n == 0 or k == 0 or k > n:
                return 0
            if k == 1 or k == n:
                return 1
            return k * solve(n - 1, k) + solve(n - 1, k - 1)
        return solve(n, k) % int(1e9+7)
```

##### DP bottom up, n*k space
```	

    #5700ms and 212Mb memory, O(n*k) time, O(n*k) space
    def waysToDistribute(self, n: int, k: int) -> int:
        dp = [[0] * (n) for _ in range(k)]
        for i in range(n):
            dp[0][i] = 1
        
        for r in range(1, k):
            for c in range(r, n):
                dp[r][c] = (r+1) * dp[r][c-1] + dp[r-1][c-1]

        return dp[-1][-1] % int(1e9+7)

```

##### DP, O(n) space

We can further reduce the space here.
Given that we only need the data from the previous k value, we can use the modulo operation to index the last row we calculated.

The idea is similar to what I used for:
https://leetcode.com/problems/n-th-tribonacci-number/discuss/929567/Simplest-4-lines-python-O(n)-solution-DP

```
    #4800ms and 15Mb memory, O(n*k) time, O(n) space
    def waysToDistribute(self, n: int, k: int) -> int:
        dp = [[0] * (n) for _ in range(2)]
        for i in range(n):
            dp[0][i] = 1

        for r in range(1, k):
            for c in range(r, n):
                cr = r % 2
                dp[cr][c] = (r + 1) * dp[cr][c - 1] + dp[~cr][c - 1] if c != r else dp[~cr][c - 1]

        return dp[(k-1)%2][-1] % int(1e9 + 7)
```

**Please upvote if it was helpful! :D**