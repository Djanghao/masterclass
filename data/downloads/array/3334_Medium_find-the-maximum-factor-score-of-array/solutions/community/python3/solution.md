# O(N^2) and O(N) solutions explained.

**Author:** stomachion
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5973082/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5973082/)

---

# Intuition
Pick an index to eliminate (-1 for none) and keep track of best score. In the inner loop `d` is the current **gcd**, `m` is the current **lcm**. Note that: `gcd(0, x) = x` and `lcm(1, x) = x`.

Since N is small (up to 100) the brute force $$O(N^2)$$ solution is very fast. For larger values of N (up to $$10^5$$) is worth using a bit of extra memory to improve time efficiency to $$O(N)$$.

See the second solution which uses prefix and suffix arrays for **gcd** and **lcm**. To calculate `gcd` without index `i` = `gcd(dpre[i-1], dsuf[i+1])`, rather then looping through the remaining n-1 indexes (and similarly for `lcm`).

Even for the small values tested for this problem the second solution is faster then the first `6ms` versus `55ms`.


# Code
**Solution 1**
Time complexity: $$O(N^2)$$, Space complexity: $$O(1)$$
```
def maxScore(self, nums: List[int]) -> int:
    n = len(nums)
    res = 0
    for i in range(-1, n):
        d, m = 0, 1
        for j in range(n):
            if j != i:
                d = gcd(d, nums[j])
                m = lcm(m, nums[j])
        res = max(res, d * m)
    return res
```

**Solution 2**
Time complexity: $$O(N)$$, Space complexity: $$O(N)$$

```
def maxScore(self, nums: List[int]) -> int:
    def incremental(index_order):
        darr, marr = [0] * n, [0] * n
        d, m = 0, 1
        for i in index_order:
            d = gcd(d, nums[i])
            m = lcm(m, nums[i])
            darr[i], marr[i] = d, m
        return darr, marr

    n = len(nums)
    dpre, mpre = incremental(range(n))
    dsuf, msuf = incremental(reversed(range(n)))
    res = dpre[-1] * mpre[-1]
    for i in range(n):
        d1, d2 = dpre[i - 1] if i > 0 else 0, dsuf[i + 1] if i + 1 < n else 0
        m1, m2 = mpre[i - 1] if i > 0 else 1, msuf[i + 1] if i + 1 < n else 1
        res = max(res, gcd(d1, d2) * lcm(m1, m2))
    return res
```