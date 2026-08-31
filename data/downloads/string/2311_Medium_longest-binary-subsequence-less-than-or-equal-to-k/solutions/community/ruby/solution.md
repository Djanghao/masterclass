# Best Simple Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/3145396/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/3145396/)

---


```
class Solution {
public:
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
};
```