# [Java/C++/Python] KMP, O(n)

**Author:** lee215
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674068/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674068/)

---

# **Intuition**
Use [KMP](https://www.google.com/search?q=kmp),
to find out all the prefix string ending at `s[n - 1]`.
<br>

# **Explanation**
We want to find the the minimum time to revert word,
so we check with the longest prefix ending at `s[n - 1]`.

Assume the length is `v`,
we check if `(n - v) % k == 0`,
if so it means we can meet this case after some operation.

For example `s = "abcdxxxxabcd", k = 4`
`v = 4` for "abcd".
If `k = 4` we can make abcd + xxxx + xxxx.
If `k = 3` we can't, and it will be xxabcd + xxx + xxx, then bcd + xxx + xxx + xxx.

If `(n - v) % k > 0`,
we continue to check next longest prefix `v = kmp[v]` based on kmp algo.
We continue doing this process until `(n - v) % k == 0` or `v = 0`.

Finally we return upper rounded integer of `(n - v) / k`
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int minimumTimeToInitialState(String s, int k) {
        int n = s.length(), v = 0, dp[] = new int[n];
        for (int i = 1; i < n; i++) { // kmp
            while (v > 0 && s.charAt(i) != s.charAt(v)) {
                v = dp[v - 1];
            }
            v = dp[i] = v + (s.charAt(i) == s.charAt(v) ? 1 : 0);
        }
        while (v > 0 && (n - v) % k > 0) {
            v = dp[v - 1];
        }
        return (n - v + k - 1) / k;
    }
```

**C++**
```cpp
    int minimumTimeToInitialState(string s, int k) {
        int n = s.size(), v = 0;
        vector<int> dp(n, 0);
        for (int i = 1; i < n; i++) { // kmp
            while (v > 0 && s[i] != s[v])
                v = dp[v - 1];
            v = dp[i] = v + (s[i] == s[v]);
        }
        while (v > 0 && (n - v) % k > 0)
            v = dp[v - 1];
        return (n - v + k - 1) / k;
    }
```

**Python**
```py
    def minimumTimeToInitialState(self, s: str, k: int) -> int:
        n = len(s)
        dp = [0] * n
        v = 0
        for i in range(1, n): # kmp
            while v and s[i] != s[v]:
                v = dp[v - 1]
            v = dp[i] = v + (s[i] == s[v])
        while v and (n - v) % k > 0:
            v = dp[v - 1]
        return (n - v + k - 1) // k
```

**Python 1-line**
Time `O(n^2)`
```py
    def minimumTimeToInitialState(self, word: str, k: int) -> int:
        return next(t for t in count(1) if word.startswith(word[t * k : ]))
```
