# [Python] Simulation

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312034/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312034/)

---

# **Explanation**
Sorted the element by the value and index.
For each `A[i]`, check it's visited `seen[i]`.
If not yet, update `res += a`,
and mark `seen[i] = seen[i - 1] = seen[i + 1] = 1`.
Finally return `res`.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Python**
```py
    def findScore(self, A: List[int]) -> int:
        seen = [0] * (len(A) + 1)
        res = 0
        for a,i in sorted([a,i] for i,a in enumerate(A)):
            if seen[i]: continue
            res += a
            seen[i] = seen[i - 1] = seen[i + 1] = 1
        return res
```
