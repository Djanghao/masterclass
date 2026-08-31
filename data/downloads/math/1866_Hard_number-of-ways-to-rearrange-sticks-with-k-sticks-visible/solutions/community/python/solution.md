# Python DP O(n*k) with explanation: insert the shortest stick

**Author:** Gowe
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211097/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/1211097/)

---

For every `dp(n, k)`, Always consider the shortest stick at first. That is, we manage to insert the shortest stick to every possbile arragement/permutation of length `n - 1`.

There are two cases to insert the shortest stick (e.g. `1`) to a existing arrangements (e.g. `2, 3` or `3, 2`).

1. Insert the shortest stick at the beginning of a existing arrangement. The shortest stick will be visible. So `k - 1` more visible sticks are needed in the remaining arrangement of length `n - 1`. It is `1 * dp(n - 1, k - 1)`.
2. Insert the shortest stick at any position except the beginning of a existing arrangements of length `n - 1`. The shortest stick will be invisible as all sticks before it are longer than itself. Also, because it is shortest, all sticks after it won't be affected. There are `n - 1` positions to insert, `k` more visible sticks needed. It is `(n - 1) * dp(n - 1, k)`.

For `dp(3, 2)`:

`1` can be inserted at the beginning of some a existing arrangements with `k = 2 - 1 = 1` visible sticks (because `1` itself is visible). The only candidate arrangement is `[3, 2]`. So here is `[1, 3, 2]`.
`1` can be inserted at any position except the beginning of some a existing arrangements with `k = 2` visible sticks. The only candidate is `[2, 3]`. So here are `[2,3,1]` and `[2,1,3]`.

That is `dp(3, 2) = 1 * dp(3 - 1, 2 - 1) + (3 - 1) * dp(3 - 1, 2)`.

**Code**: 

```
M = 10 ** 9 + 7

from functools import cache

class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        return dp(n, k)

# consider the shortest
@cache
def dp(n, k):
    if n == k:
        return 1
    if n <= 0 or k <= 0:
        return 0
    return (dp(n - 1, k - 1) + (n - 1) * dp(n - 1, k)) % M  

# `dp(n, k)` indicates the number of arrangements of `n` distinct sticks with exactly `k` visible sticks. 
# Those `n` **distinct** sticks does NOT have to be numbered from `1` to `n` consecutively.
```

**Time complexity**: `O(n * k)`

---

Similarly, we can also consider the longest stick at first. But it results in a larger time complexity. 
**Code**: 
```
# from math import comb, perm

@cache
def dp(n, k):
    if n == k:
        return 1
    if n <= 0 or k <= 0:
        return 0
    ans = 0
    for l in range(k - 1, n - 1 + 1): # l indicates the number of elements in the left
        ans += comb(n - 1, l) * dp(l, k - 1) * perm(n - 1 - l, n - 1 - l)
        ans %= M
    return ans
```
**Time complexity**: `O(n*k*(n-k))` (TLE)