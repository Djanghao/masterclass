# [C++] O(n2^n) Short Dynamic Programming Bottom-Up Approach With State Compression

**Author:** alexunxus
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/3219113/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/3219113/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since `n <= 17`, we can use a bitmask `s`(e.g. `01001` means 2nd and 5th monster) to represent which subset of monster is beaten. As long as we compute the value for `dp[s]`, it can update all `s' = s |(1<<i)`, `i=0..n-1`. Since `s' >= s`, it is always safe to iterate `s` from 0 to `(1<<n)-1` in a bottom-up manner.

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic Programming

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n\\cdot 2^n)$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(2^n)$

# Code
```
class Solution {
public:
    long long minimumTime(vector<int>& power) {
        int n = power.size();
        long long dp[1<<n];
        for (int s = 0; s < 1<<n; ++s) {dp[s] = 2e15;}
        dp[0] = 0;
        for (int s = 0; s < 1<<n; ++s) {
            int cnt = __builtin_popcount(s)+1;
            for (int i = 0; i < n; ++i) {
                if (s&(1<<i)) continue;
                dp[s|(1<<i)] = min(dp[s|(1<<i)], dp[s] + (power[i]-1)/cnt+1);
            }
        }
        return dp[(1<<n)-1];
    }
};
```