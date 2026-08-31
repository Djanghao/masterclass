# [Java/C++/Python] Two Pointers

**Author:** lee215
**Votes:** 49
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546745/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3546745/)

---

# **Explanation**
Compare each `s[i]` with its symmetrical postion in palindrome,
which is `s[n - 1 - i]`.

To make the lexicographically smallest palindrome,
we make `s[i] = s[n - 1 - i] = min(s[i], s[n - i - 1])`
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public String makeSmallestPalindrome(String s) {
        int n = s.length();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++)
            sb.append(Character.toString(Math.min(s.charAt(i), s.charAt(n - i - 1))));
        return sb.toString();
    }
```

**C++**
```cpp
    string makeSmallestPalindrome(string s) {
        int n = s.size();
        for (int i = 0; i < n; ++i)
            s[i] = s[n - 1 - i] = min(s[i], s[n - i - 1]);
        return s;
    }
```

**Python**
```py
    def makeSmallestPalindrome(self, s: str) -> str:
        return ''.join(map(min, zip(s, s[::-1])))
```
