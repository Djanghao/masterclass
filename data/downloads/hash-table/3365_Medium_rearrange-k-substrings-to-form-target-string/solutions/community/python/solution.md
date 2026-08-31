# [Python] Split and Count

**Author:** lee215
**Votes:** 17
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077287/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077287/)

---

# **Explanation**
Split and count substrings.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

```py [Python3]
    def isPossibleToRearrange(self, s: str, t: str, k: int) -> bool:
        n, l = len(s), len(s) // k
        c1 = Counter(s[i:i+l] for i in range(0,n,l))
        c2 = Counter(t[i:i+l] for i in range(0,n,l))
        return c1 == c2
```
