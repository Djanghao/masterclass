# cached prefix_sum + binary search. 4ms

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sized-array/solutions/6024947/](https://leetcode.com/problems/maximum-sized-array/solutions/6024947/)

---

```
10^15  -> 1000000000000000
n=1197 -> 1001170310848344
```

The `A` array for `n = 3`:
```
        ijk
        000 -> 0
        010 -> 0
        020 -> 0
        001 -> 0
        011 -> 0
        021 -> 0
        002 -> 0
        012 -> 0
        022 -> 0

        100 -> 0
        110 -> 1
        120 -> 2
        101 -> 1
        111 -> 1
        121 -> 3
        102 -> 2
        112 -> 3
        122 -> 2

        200 -> 0
        210 -> 2
        220 -> 4
        201 -> 2
        211 -> 2
        221 -> 6
        202 -> 4
        212 -> 6
        222 -> 4
```
From the above `j or k` repeats for all `[0, n^2)`.
We can precompute and cache `j or k` for all `n` and then find the `total_sum(n)` by using sum of natural numbers.

```
jork_ps = [[0] * 1198 for _ in range(1198)]
for j in range(1198):
    for k in range(1198):
        jork_ps[j][k] = j | k
        if j:
            jork_ps[j][k] += jork_ps[j - 1][k]
        if k:
            jork_ps[j][k] += jork_ps[j][k - 1]
        if j and k:
            jork_ps[j][k] -= jork_ps[j - 1][k - 1]

class Solution:
    def maxSizedArray(self, s: int) -> int:
        return bisect_right(range(1198), s, key=lambda n: (n - 1) * n // 2 * jork_ps[n - 1][n - 1]) - 1
```