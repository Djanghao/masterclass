# Best C++ Solution

**Author:** 6cdh
**Votes:** 204
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175189/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175189/)

---

The basic idea is `'a' < 'e' < 'i' < 'o' < 'u'`. So this problem is to find the length of the longest non-decreasing substring that has five different chars.

```c++
class Solution {
public:
    int longestBeautifulSubstring(string word) {
        const auto n = word.size();

        int cnt = 1;
        int len = 1;
        int max_len = 0;
        for (int i = 1; i != n; ++i) {
            if (word[i - 1] == word[i]) {
                ++len;
            } else if (word[i - 1] < word[i]) {
                ++len;
                ++cnt;
            } else {
                cnt = 1;
                len = 1;
            }
            
            if (cnt == 5) {
                max_len = max(max_len, len);
            }
        }
        return max_len;
    }
};
```