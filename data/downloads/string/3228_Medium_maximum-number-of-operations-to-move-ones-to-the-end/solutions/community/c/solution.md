# [Java/C++/Python] Count Ones

**Author:** lee215
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5509007/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5509007/)

---

# **Explanation**
Itearate each char in `s`,

If it's `1`,
then increment the count `ones`,

If it's `0`,
then it need at most `ones` operations,
to move all `ones` `1`s ending at this position.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maxOperations(String s) {
        int res = 0, ones = 0, n = s.length();
        for (int i = 0; i < n; ++i) {
            ones += s.charAt(i) - '0';
            if (i > 0 && s.charAt(i) < s.charAt(i - 1)) {
                res += ones;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int maxOperations(string s) {
        int res = 0, ones = 0, n = s.size();
        for (int i = 0; i < n; ++i) {
            ones += s[i] - '0';
            if (i > 0 && s[i] < s[i - 1])
                res += ones;
        }
        return res;
    }
```

**Python**
```py
    def maxOperations(self, s: str) -> int:
        res = ones = 0
        for v, l in groupby(s):
            if v == '1':
                ones += len(list(l))
            else:
                res += ones
        return res
```
