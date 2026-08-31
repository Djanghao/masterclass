# [Java/C++/Python] Straight Forward Solution

**Author:** lee215
**Votes:** 35
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3623911/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3623911/)

---

# **Explanation**
1. `a` in prefix is good, skip all `a` in the beginning.
2. If all characters are `a`, change the last char to `z`.
3. From the first char not `a`, decrese them, until next `a`.

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public String smallestString(String s) {
        int i = 0, n = s.length();
        char[] A = s.toCharArray();
        while (i < n && A[i] == 'a')
            i++;
        if (i == n)
            A[n - 1] = 'z';
        while (i < n && A[i] != 'a')
            --A[i++];
        return String.valueOf(A);
    }
```

**C++**
```cpp
    string smallestString(string s) {
        int i = 0, n = s.size();
        while (i < n && s[i] == 'a')
            i++;
        if (i == n)
            s[n - 1] = 'z';
        while (i < n && s[i] != 'a')
            --s[i++];
        return s;
    }
```

**Python**
```py
    def smallestString(self, s):
        i = 0
        n = len(s)
        s = list(s)
        while i < n and s[i] == 'a':
            i += 1
        if i == n:
            s[-1] = 'z'
        while i < n and s[i] != 'a':
            s[i] = chr(ord(s[i]) - 1)
            i += 1
        return ''.join(s)
```
