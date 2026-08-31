# Sliding Window

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916787/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4916787/)

---

**C++**
```cpp
int maximumLengthSubstring(string s) {
    int cnt[26] = {}, res = 0;
    for (int i = 0, j = 0; i < s.size(); ++i) {
        if (++cnt[s[i] - 'a'] > 2)
            while (cnt[s[i] - 'a'] > 2)
                --cnt[s[j++] - 'a'];
        res = max(res, i - j + 1);
    }
    return res;
}
```