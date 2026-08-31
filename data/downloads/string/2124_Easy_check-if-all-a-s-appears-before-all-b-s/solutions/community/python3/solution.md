# [Java/Python 3] Check if 'b' followed by 'a'.

**Author:** rock
**Votes:** 44
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1660987/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1660987/)

---

**Method 1**

```java
    public boolean checkString(String s) {
        for (int i = 1; i < s.length(); ++i) {
            if (s.charAt(i - 1) == 'b' && s.charAt(i) == 'a') {
                return false;
            }
        }
        return true;
    }
```
```python
    def checkString(self, s: str) -> bool:
        for i, c in enumerate(s):
            if i > 0 and s[i - 1] == 'b' and c == 'a':
                return False
        return True
```

----

**Method 2:**

```java
    public boolean checkString(String s) {
        return !s.contains("ba");
    }
```
```python
    def checkString(self, s: str) -> bool:
        return 'ba' not in s
```
**Analysis**

Time: `O(n)`, space: `O(1)`, where `n = s.length()`.