# [Java/C++/Python] One Pass, 4-line

**Author:** lee215
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971513/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971513/)

---

# **Explanation**
For case `aaaa..aaa` of length `n`, result is `res = n`.

For each different char, `res--`

For example:
aaaa, res = n = 4
aabb, res = n - 1
aabc, res = n - 2
abcd, res = n - 3
..
The length of each char doesn't matter

Just one pass, and check if `word[i] != word[i - 1]`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

```Java [Java]
    public int possibleStringCount(String word) {
        int n = word.length(), res = n;
        for (int i = 1; i < n; ++i)
            if (word.charAt(i) != word.charAt(i - 1))
                res--;
        return res;
    }
```

```C++ [C++]
    int possibleStringCount(string word) {
        int n = word.size(), res = n;
        for (int i = 1; i < n; ++i)
            res -= word[i] != word[i - 1];
        return res;
    }
```

```py [Python3]
    def possibleStringCount(self, s: str) -> int:
        return len(s) - len(list(groupby(s))) + 1
```
