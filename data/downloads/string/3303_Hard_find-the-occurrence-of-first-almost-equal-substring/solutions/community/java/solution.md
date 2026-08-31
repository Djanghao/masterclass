# [Java/C++/Python] Z-function

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844897/](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844897/)

---

# **Intuition**
You need a template for z-function.
<br>

# **Explanation**
For every substring of `s`  having same length as pattern,
check it's longest prefix same as pattern prefix,
check it's longest suffix same as pattern suffix,
if `prefix + 1 + suffix >= m`, then it's matched,
return the current index `i`
<br>

# **Complexity**
Time `O(m + n)`
Space `O(m + n)`
<br>

**Java**
```java
    public int minStartingIndex(String s, String pattern) {
        int n = s.length(), m = pattern.length();
        int[] z1 = z_function(pattern + s);
        int[] z2 = z_function(new StringBuilder(s + pattern).reverse().toString());
        for (int i = 0; i <= n - m; ++i)
            if (z1[m + i] + 1 + z2[n - i] >= m)
                return i;
        return -1;
    }
```

**C++**
```cpp
    int minStartingIndex(string s, string pattern) {
        int n = s.size(), m = pattern.size();
        string pattern2(pattern.rbegin(), pattern.rend());
        string s2(s.rbegin(), s.rend());
        vector<int> z1 = z_function(pattern + s);
        vector<int> z2 = z_function(pattern2 + s2);
        for (int i = 0; i <= n - m; ++i)
            if (z1[m + i] + 1 + z2[n - i] >= m)
                return i;
        return -1;
    }
```

**Python**
```py
    def minStartingIndex(self, s: str, pattern: str) -> int:
        n, m = len(s), len(pattern)
        z1 = z_function(pattern + s)
        z2 = z_function(pattern[::-1] + s[::-1])
        for i in range(n - m + 1):
            if z1[m + i] + 1 + z2[n - i] >= m:
                return i
        return -1
```

Upvote this post and save the template from wiki:
**Java**
```java
    private int[] z_function(String s) {
        int n = s.length(), l = 0, r = 0;
        int[] z = new int[n];
        for (int i = 1; i < n; ++i) {
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }
            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i])) {
                ++z[i];
            }
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }
```

**C++**
```cpp
        auto z_function = [](const string& s) -> vector<int> {
            int n = s.size(), l = 0, r = 0;
            vector<int> z(n, 0);
            for (int i = 1; i < n; ++i) {
                if (i <= r) {
                    z[i] = min(r - i + 1, z[i - l]);
                }
                while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
                    ++z[i];
                }
                if (i + z[i] - 1 > r) {
                    l = i;
                    r = i + z[i] - 1;
                }
            }
            return z;
        };
```

**Python**
```py
    def z_function(s):
        n = len(s)
        z = [0] * n
        l, r = 0, 0
        for i in range(1, n):
            if i <= r:
                z[i] = min(r - i + 1, z[i - l])
            while i + z[i] < n and s[z[i]] == s[i + z[i]]:
                z[i] += 1
            if i + z[i] - 1 > r:
                l, r = i, i + z[i] - 1
        return z
```
