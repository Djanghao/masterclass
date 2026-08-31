# Two Counters

**Author:** votrubac
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368427/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3368427/)

---

**C++**
```cpp
int findTheLongestBalancedSubstring(string s) {
    int c0 = 0, c1 = 0, res = 0;
    for (int i = 0; i < s.size(); ++i) {
        if (s[i] == '0')
            c0 = c1 ? 1 : c0 + 1;
        c1 = s[i] == '0' ? 0 : c1 + 1;
        res = max(res, 2 * min(c0, c1));
    }
    return res;
}
```