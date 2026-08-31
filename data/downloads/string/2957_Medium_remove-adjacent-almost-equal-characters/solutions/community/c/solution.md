# [Java/C++/Python] Greedy

**Author:** lee215
**Votes:** 19
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382686/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382686/)

---

# **Explanation**
`k` is the number of operation we will make.

Check each adjacent pair `s[i]` and `s[i - 1]`.
If `s[i]` and `s[i - 1]` are almost-equal,
we will make an operation to change `s[i]` to other letter.
Because there are `26` letters,
we can always make it not almost-equal to `s[i + 1]`.
So we can skip the check for `s[i]` and `s[i + 1]`.

Finally we return `k`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int removeAlmostEqualCharacters(String s) {
        int k = 0, n = s.length();
        for (int i = 1; i + k < n; ++i)
            k += Math.abs(s.charAt(i + k) - s.charAt(i + k - 1)) < 2 ?  1 : 0;
        return k;
    }
```

**C++**
```cpp
    int removeAlmostEqualCharacters(string s) {
        int k = 0, n = s.length();
        for (int i = 1; i < n; ++i)
            if (abs(s[i] - s[i - 1]) <= 1)
                k++, i++;
        return k;
    }
```

**Python**
```py
    def removeAlmostEqualCharacters(self, s: str) -> int:
        i, k = 1, 0
        while i + k < len(s):
            k += abs(ord(s[i + k]) - ord(s[i + k - 1])) < 2
            i += 1
        return k
```
