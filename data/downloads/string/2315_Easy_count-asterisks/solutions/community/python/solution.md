# [Java/C++/Python] One Pass

**Author:** lee215
**Votes:** 64
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2196027/](https://leetcode.com/problems/count-asterisks/solutions/2196027/)

---

# **Explanation**
Parse the input, if currently met odd bars, we count `*`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int countAsterisks(String s) {
        int res = 0, bars = 0;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '*' && bars % 2 == 0)
                res++;
            if (s.charAt(i) == '|')
                bars++;
        }
        return res;
    }
```

**C++**
```cpp
    int countAsterisks(string s) {
        int res = 0, sign = 1;
        for (char& c : s)
            if ((sign ^= c == '|') && c == '*')
                res++;
        return res;
    }
```

**Python**
Space O(n)
```py
    def countAsterisks(self, s: str) -> int:
        return sum([a.count('*') for a in s.split('|')][0::2])
```
