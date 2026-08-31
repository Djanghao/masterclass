# [Python] Check all Permuations

**Author:** lee215
**Votes:** 12
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836344/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836344/)

---

# **Intuition**
Only 6 permutatons of (a,b,c),
we can brute force check every permutation.
<br>

# **Explanation**
`f(a, b)` will merge two string.
If `b` is subarray of `a`,
directly return `a`.
Otherwise we check the longest common string of `a` suffix and `b` prefix.
Note this part can be solved in `O(n + m)` with kmp.

finally return the min `f(f(a,b), c)` by length and string.
<br>

# **Complexity**
Time `O(6n^2)`
Space `O(6n^2)`
both can be improved to `O(n)`.
<br>


**Python**
```py
    def minimumString(self, a: str, b: str, c: str) -> str:
        def f(a, b):
            if b in a: return a
            for k in range(len(a), -1, -1):
                if a.endswith(b[:k]):
                    return a + b[k:]
        return min((f(f(a,b), c) for a,b,c in permutations((a,b,c))), key=lambda a: (len(a), a))
```
