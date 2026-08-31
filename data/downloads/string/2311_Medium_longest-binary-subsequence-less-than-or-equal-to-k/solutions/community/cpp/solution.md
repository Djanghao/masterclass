# O(N) C++ Solution with thinking process - beats 100%

**Author:** duylele1173
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5313507/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5313507/)

---

# Intuition
Firstly, we can observe that we should always take zero into our answer, after that we will insert the one from **last to first**. Since inlucding `0` won't affect our value, while inlcuding `1` will.
# Approach

We itterate the digits from right to left, if we pass a 0, simply add it into our answer. For each `1` encountered, first check if including it would violate the constrain (by compare `current_value | (1 << currentLent)` is not greater than `k`), if it isn't we can include it to our answer.

Crucially, if we skip a `1` earlier in the sequence to stay within the flip limit, using a later `1` becomes inefficient.

*Remember to handle integer overflow carefully.*

# Complexity
- `n = s.size()`
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
# Code
```
class Solution {
public:
    int longestSubsequence(string s, int k) {
        int cur = 0;
        int ans = 0;
        long long val = 0;
        bool flag = false;
        for (int i = s.size() - 1; i >= 0; i --) {
            if (s[i] == '0') ans ++, cur ++; else {
                if (!flag && cur < 32 && (val | (1ll << cur)) <= k) {
                    ans ++;
                    val |= 1 << cur;
                    cur ++;
                }
                if (cur < 32 && (val | 1ll << cur) > k) flag = true;
            }
        }
        cout << val;
        return ans;
    }
};
```