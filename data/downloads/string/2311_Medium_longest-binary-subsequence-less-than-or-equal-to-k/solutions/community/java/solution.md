# O(n)

**Author:** votrubac
**Votes:** 194
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168423/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2168423/)

---

Such a deceptive problem. The key is to realize that we need to take all zeros.

Then, we take as many `1` from the right as we can, before exceeding `k`. It can be shown that greedily using `1` from the right is always better than to skip it.

**C++**
```cpp
int longestSubsequence(string s, int k) {
    int val = 0, cnt = 0, pow = 1;
    for (int i = s.size() - 1; i >= 0 && val + pow <= k; --i) {
        if (s[i] == '1') {
            ++cnt;
            val += pow;
        }
        pow <<= 1;
    }
    return count(begin(s), end(s), '0') + cnt;
}
```
**Java**
```java
public int longestSubsequence(String s, int k) {
    int val = 0, cnt = 0, pow = 1;
    for (int i = s.length() - 1; i >= 0 && val + pow <= k; --i) {
        if (s.charAt(i) == '1') {
            ++cnt;
            val += pow;
        }
        pow <<= 1;
    }
    return (int)s.chars().filter(ch -> ch == '0').count() + cnt;
}
```

#### One-Pass
**C++**
```cpp
int longestSubsequence(string s, int k) {
    int cur = 0, pow = 1, i = s.size() - 1;
    for (; i >= 0 && cur + pow <= k; --i) {
        cur += (s[i] - '0') * pow;
        pow <<= 1;
    }
    return i < 0 ? s.size() : count(begin(s), begin(s) + i + 1, '0') + s.size() - i - 1;
}
```