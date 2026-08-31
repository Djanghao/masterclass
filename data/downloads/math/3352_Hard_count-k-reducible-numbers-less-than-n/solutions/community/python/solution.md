# [Python] DP

**Author:** lee215
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028638/](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028638/)

---

# **Intuition**
`s` max length 800,
will be reduced to <= 800 after one operation.
<br>

# **Explanation**
First we prepare a `dp`:
`dp[i]` means the number of operation to reduce from `i` to `1`.
`dp[i] = dp[i.bit_count()] + 1` and we initilize `dp[1] = 0`

Then, we iterate `s`.
When we meet `1`,
if we set this bit as `0`,
then the number will be smaller than `s` whatever the suffix is.

`c1` is the count of `1` that we met in prefix,
`c2` is the count of `1` that we will put in the suffix.
We check if k-reducible `dp[c1 + c2] + 1 <= k`,
the we update the number of combination comb `comb(n - i - 1, c2)`:
There `n - i - 1` bit in the suffix and we will put `c2` of bits `1`.

Finally return result.
<br>

# **Complexity**
Time `O(n * n)`
Space `O(1)`

Ignoring `comb` complexity,
which can be pre handled in `O(m * m)`.
<br>

```py [Python3]
def countKReducibleNumbers(self, s: str, k: int) -> int:
        dp = [0] * 1000
        for i in range(2, 1000):
            dp[i] = dp[i.bit_count()] + 1
        c1 = 0
        n = len(s)
        res = 0
        mod = 10 ** 9 + 7
        for i in range(n):
            if s[i] == '1':
                for c2 in range(n - i):
                    if c1 + c2 > 0 and dp[c1 + c2] + 1 <= k:
                        res += comb(n - i - 1, c2) % mod
                c1 += 1
        return res % mod
```
