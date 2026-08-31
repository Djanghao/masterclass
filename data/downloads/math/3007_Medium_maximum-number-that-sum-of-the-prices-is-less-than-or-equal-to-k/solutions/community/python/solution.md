# [Python] Binary Search

**Author:** lee215
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561863/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561863/)

---

Hi firends, 
[happy new year 2024](https://leetcode.com/discuss/feedback/4518909/Happy-New-Year-2024)
# **Intuition**
Write function `check`
to find out the the sum of prices of all numbers from 1 to `v`.
<br>

# **Explanation**
Apply binary search from `1` to `10 ** 15`,
to find out the max value `v` with `check(v) <= k`.
<br>

# **Complexity**
Time `O(log2(k)^ 2)`
Space `O(log2(k))`
<br>

**Python**
```py
    def findMaximumNumber(self, k: int, x: int) -> int:
        def check(v):
            A = list(map(int, bin(v)[2:]))
            n = len(A)
            res = p = 0
            for i,v in enumerate(A):
                if v == 1:
                    l = n - i - 1
                    res += (p << l) + ((l // x) << (l - 1) if l else 0)
                if (n - i) % x == 0:
                    p += v
            return res + p

        l, r = 1, 10 ** 15
        while l < r:
            mid = (l + r + 1) // 2
            if check(mid) <= k:
                l = mid
            else:
                r = mid - 1
        return l
```
