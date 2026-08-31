# Two Pointers

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590079/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590079/)

---

Here, `i` is the current character, and `j` marks the start of the aplhabetical string.

In an aplhabetical string starting at `j`, `s[i] - s[j] == i - j` would be true for each `i <= j`.

**Java**
```java
public int longestContinuousSubstring(String s) {
    int j = 0, res = 1;
    for (int i = 1; i < s.length(); ++i) {
        if (s.charAt(i) != s.charAt(j) + i - j)
            j = i;
        res = Math.max(res, i - j + 1);
    }
    return res;
}
```
**C++**
```cpp
int longestContinuousSubstring(string s) {
    int j = 0, res = 1;
    for (int i = 1; i < s.size(); ++i) {
        if (s[i] != s[j] + i - j)
            j = i;
        res = max(res, i - j + 1);
    }
    return res;
}
```