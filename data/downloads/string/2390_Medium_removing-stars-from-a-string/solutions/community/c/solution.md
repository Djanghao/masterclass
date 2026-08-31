# [Java/C++/Python] Stack Simulation

**Author:** lee215
**Votes:** 70
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/2493117/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/2493117/)

---

# **Intuition**
`*` will only affect the characters before it.
The input `s` works like tapping and `*` works like the deletion action.
<br>

# **Explanation**
Use a stack to simulate the process.
For each character `c` in string `s`,
if `c == '*'`, pop the last element from the stack,
to simulate the deletion.
if `c != '*'`, push the element to the stack.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public String removeStars(String s) {
        StringBuilder res = new StringBuilder();
        for (char c : s.toCharArray())
            if (c == '*')
                res.setLength(res.length() - 1);
            else
                res.append(c);
        return res.toString();
    }
```

**C++**
```cpp
    string removeStars(string s) {
        string res;
        for (char c : s)
            if (c == '*')
                res.pop_back();
            else
                res += c;
        return res;
    }
```

**Python**
```py
    def removeStars(self, s):
        res = []
        for c in s:
            if c != '*':
                res += c
            elif res:
                res.pop()
        return ''.join(res)
```
