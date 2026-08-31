# [Java/C++/Python] Check s[i] == s[i - 1]

**Author:** lee215
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3570380/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3570380/)

---

# **Explanation**
Check if `s[i] == s[i - 1]`.
If they are different, we need to either:
1. change the prefix to from start to `s[i - 1]`, cost `i`.
2. change the suffix from `s[i]` to end, cost `n - i`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minimumCost(String s) {
        long res = 0;
        for (int i = 1, n = s.length(); i < n; ++i)
            if (s.charAt(i) != s.charAt(i - 1))
                res += Math.min(i, n - i);
        return res;
    }
```

**C++**
```cpp
    long long minimumCost(string s) {
        long long res = 0;
        for (int i = 1, n = s.size(); i < n; ++i)
            if (s[i] != s[i - 1])
                res += min(i, n - i);
        return res;
    }
```

**Python**
```py
    def minimumCost(self, s: str) -> int:
        n = len(s)
        return sum(min(i, n - i) for i in range(1, n) if s[i] != s[i - 1])
```
