# [Python] DP Solution with Explanation

**Author:** lee215
**Votes:** 19
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2195996/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2195996/)

---

# **Explanation**
`dp[i][j]` means the number of sequence ending with `i` and `j`
`dp[j][k] = sum(dp[i][j])`, where `k != i and k != j and gcd(j, k) == 1`.

Initialize `dp[-1][-1]`,
since `-1` is not on dice and co-prime with any integers.
<br>

# **Complexity**
Time `O(216n)`
Space `O(36)`
<br>


**Python**
```py
    def distinctSequences(self, n: int) -> int:
        mod = 10**9 + 7
        dp, dp2 = {(7, 7): 1}, Counter()
        for _ in range(n):
            for i, j in dp:
                for k in range(1, 7):
                    if k != i and k != j and gcd(j, k) == 1:
                        dp2[j, k] = (dp2[j, k] + dp[i, j]) % mod
            dp, dp2 = dp2, Counter()
        return sum(dp.values()) % mod
```
