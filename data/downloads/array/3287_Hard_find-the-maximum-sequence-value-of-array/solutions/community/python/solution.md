# [Python] DP

**Author:** lee215
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5793858/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5793858/)

---

# **Intuition**
It's like a knapsack problem, we can take or skip.
<br>

# **Explanation**
`dp(i, k, di)` returns the possible OR value of `k` elements
in A[i], A[i +/- 1], A[i +/- 2] ...

Enumerate the mid of first `k` elements and last `k` elements,
brute check the all pair combination from left and right,
return the max.
<br>

# **Complexity**
Time `O(n * k * 128)`
Space `O(n * k * 128)`
<br>


**Python**
```py
    def maxValue(self, A: List[int], k: int) -> int:
        @cache
        def dp(i, k, di):
            if k == 0:
                return {0}
            if i < 0 or i == len(A):
                return set()
            return dp(i + di, k, di) | {v | A[i] for v in dp(i + di, k - 1, di)}
        res = 0
        for i in range(len(A)):
            for a in dp(i, k, -1):
                for b in dp(i + 1, k, 1):
                    res = max(res, a ^ b)
        return res
```

