# [Python3] Dynamic Programming, Clean & Concise

**Author:** xil899
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648661/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648661/)

---

We define a `dp` array, where `dp[i]` represents *the **maximum** number of operations needed to delete all of* `s[i:]`.
We optimize the solution by checking if `s` contains only one unique character - in this case, we return `len(s)`.

```
class Solution:
    def deleteString(self, s: str) -> int:
        n = len(s)
        if len(set(s)) == 1:
            return n
        dp = [1] * n
        for i in range(n - 2, -1, -1):
            for l in range(1, (n - i) // 2 + 1):
                if s[i : i + l] == s[i + l : i + 2 * l]:
                    dp[i] = max(dp[i], 1 + dp[i + l])
        return dp[0]
```

**Remark:** We can further optimize the solution by trimming more paths in the process of dynamic programming. 
Specifically, we define an `M` array, where `M[i]` represent the *the **maximum** number of operations needed to delete* among all suffix substrings that start at or after `i`.

```
class Solution:
    def deleteString(self, s: str) -> int:
        n = len(s)
        if len(set(s)) == 1:
            return n
        dp, M = [1] * n, [1] * n
        for i in range(n - 2, -1, -1):
            for l in range(1, (n - i) // 2 + 1):
                if dp[i] >= M[i + l] + 1:
                    break
                if s[i : i + l] == s[i + l : i + 2 * l]:
                    dp[i] = max(dp[i], 1 + dp[i + l])
            M[i] = max(dp[i], M[i + 1])
        return dp[0]
```

**Final Remark:** Python is very good at string slicing, which runs fast enough to pass during [LC Contest 313](https://leetcode.com/contest/weekly-contest-313/). For another solution to this problem (with theoretically better time complexity), please see the one and only @lee215's [post](https://leetcode.com/problems/maximum-deletions-on-a-string/discuss/2648900/JavaC%2B%2BPython-DP-Solution).