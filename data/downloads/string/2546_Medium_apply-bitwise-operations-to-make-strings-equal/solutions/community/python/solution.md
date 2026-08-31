# [Java/C++/Python] 1-line Check 1

**Author:** lee215
**Votes:** 133
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3083831/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3083831/)

---

# **Intuition**
Enumerate the values for `s[i]` and `s[j]`
`(0, 0)` -> `(0, 0)`
`(1, 0)` -> `(1, 1)`
`(0, 1)` -> `(1, 1)`
`(1, 1)` -> `(1, 0)`
<br>

# **Explanation**
**To summrize the rule**
1. Two 0s stay 0s.
2. If we have 1, we can make any 0 to 1.
3. If we have at least two 1s, we can make any 1 to 0.

**Continue to sunmmrize**
1. All 0 string can not change.
2. Any other strings can transform from each other.

**So we only need to check**
if `s` has 1.
if `target` has 1.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

# Solution 1: Check if strings have 1
**Java**
```java
    public boolean makeStringsEqual(String s, String t) {
        return s.contains("1") == t.contains("1");
    }
```

**C++**
```cpp
    bool makeStringsEqual(string s, string t) {
        return (s.find('1') != string::npos) == (t.find('1') != string::npos);
    }
```

**Python**
```py
    def makeStringsEqual(self, s, t):
        return ('1' in s) == ('1' in t)
```
<br>

# Solution 2: Shorter
**Python**
```py
    def makeStringsEqual(self, s, t):
        return max(s) == max(t)
```

