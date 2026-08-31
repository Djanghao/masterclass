# [Python] Kmp + Two Pointers, O(n)

**Author:** lee215
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561875/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4561875/)

---

# Hi firends, 
[happy new year 2024](https://leetcode.com/discuss/feedback/4518909/Happy-New-Year-2024)
<br>
# **Intuition**
Apply kmp to find all `a` in `s`.
Apply kmp to find all `b` in `s`.
<br>

# **Explanation**
Then use two pointer,
for each substring `s[i..] = a`,
check if there exists an index `j` to make `i` beautiful.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Python**
```py
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        def kmp(s):
           dp = [0] * len(s)
           for i in range(1, len(s)):
               cur = dp[i - 1]
               while cur and s[i] != s[cur]:
                   cur = dp[cur - 1]
               dp[i] = cur + (s[i] == s[cur])
           return dp

        n, la, lb = len(s), len(a), len(b)
        v1 = kmp(a + '#' + s)
        v2 = kmp(b + '#' + s)
        ii = [i - la - la for i,v in enumerate(v1) if v >= la]
        jj = [j - lb - lb for j,v in enumerate(v2) if v >= lb]
        res = []
        j = 0
        for i in ii:
            while j < len(jj) and jj[j] < i - k:
                j += 1
            if j < len(jj) and jj[j] <= i + k:
                res.append(i)
        return res
```
