# [Java/C++/Python] Two Pointers Checking SubSequence

**Author:** lee215
**Votes:** 61
**Link:** [https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/3932451/](https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/solutions/3932451/)

---

# **Intuition**
Similar to check if `s2` is subsequence of `s1`,
but each `s1[i]` can change.
<br>

# **Explanation**
Check if `s2` is substring of increment of `s1`.
`s1[i]` is the current char to match.
`s2[j]` is the character is `s2` need to be matched.

Each time, we check if one of `s1[i]`,`s1[i] + 1`, `s1[i] - 25`
equals to `s2[j]`.
If they match,
`s1[i]` is used in the subsequence,
`s2[j]` get matched,
we increment `i` and `j`,

If they don't,
`s1[i]` isn't used in the subsequence,
`s2[j]` still need to be matched,
we only incremnt `i`.

Note that
if `s1[i] == 'z'`,
`s1[i] + 1` is not a small letter,
`s1[i] - 25` is `'a'`;
If `s1[i] < 'z'`,
`s1[i] + 1` is its next letter,
`s1[i] - 25` is not a small letter.
<br>

# **Complexity**
Time `O(n + m)`
Space `O(1)`
<br>

**Java**
```java
    public boolean canMakeSubsequence(String s1, String s2) {
        int j = 0, n = s1.length(), m = s2.length();
        for (int i = 0; i < n && j < m; ++i) {
            int a = s1.charAt(i), b = s2.charAt(j);
            if (a == b || a + 1 == b || a - 25 == b)
                ++j;
        }
        return j == m;
    }
```

**C++**
```cpp
    bool canMakeSubsequence(string s1, string s2) {
        int j = 0, n = s1.size(), m = s2.size();
        for (int i = 0; i < n && j < m; ++i)
            if (s1[i] == s2[j] || s1[i] + 1 == s2[j] || s1[i] - 25 == s2[j])
                ++j;
        return j == m;
    }
```

**Python**
```py
    def canMakeSubsequence(self, s1: str, s2: str) -> bool:
        j, n, m = 0, len(s1), len(s2)
        for i in range(n):
            if j < m and (ord(s2[j]) - ord(s1[i])) % 26 <= 1:
                j += 1
        return j == m
```
<br>

# **Solution 2**
Combined with intuition from @SunnyvaleCA,
update the condition to `(s2[j] - s1[i]) % 26 <= 1`.

**Java**
```java
    public boolean canMakeSubsequence(String s1, String s2) {
        int j = 0, n = s1.length(), m = s2.length();
        for (int i = 0; i < n && j < m; ++i)
            if ((s2.charAt(j) - s1.charAt(i) + 26) % 26 <= 1)
                ++j;
        return j == m;
    }
```

**C++**
```cpp
    bool canMakeSubsequence(string s1, string s2) {
        int j = 0, n = s1.size(), m = s2.size();
        for (int i = 0; i < n && j < m; ++i)
            if ((s2[j] - s1[i] + 26) % 26 <= 1)
                ++j;
        return j == m;
    }
```

**Python**
```py
    def canMakeSubsequence(self, s1: str, s2: str) -> bool:
        j, n, m = 0, len(s1), len(s2)
        for i in range(n):
            if j < m and (ord(s2[j]) - ord(s1[i])) % 26 <= 1:
                j += 1
        return j == m
```
