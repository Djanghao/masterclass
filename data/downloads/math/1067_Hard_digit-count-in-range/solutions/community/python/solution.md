# Python recursion with memo | Simple DFS | Readable solution

**Author:** nikhilgoyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/1317426/](https://leetcode.com/problems/digit-count-in-range/solutions/1317426/)

---

```
def digitsCount(d, low, high):
    def helper(n):
        n, dp = str(n), {}
        size = len(n)

        def dfs(i, restrict, ldzero, dcount):
            if i == size:
                return dcount
            key = i, restrict, ldzero, dcount
            if key in dp:
                return dp[key]
            dp[key], limit = 0, int(n[i]) if restrict else 9
            for digit in range(limit + 1):
                newrestrict = False if digit < limit else restrict
                newldzero = ldzero and not digit
                newdcount = dcount if newldzero else dcount + (digit is d)
                dp[key] += dfs(i + 1, newrestrict, newldzero, newdcount)
            return dp[key]

        return dfs(0, True, True, 0)

    return helper(high) - helper(low - 1)
```