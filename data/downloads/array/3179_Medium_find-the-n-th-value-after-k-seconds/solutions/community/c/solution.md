# Easiest C++ Solution

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282322/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5282322/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    const int MOD = 1e9 + 7;
public:
    int valueAfterKSeconds(int n, int k) {
        vector<int> dp(n , 1);
        for(int i = 0; i < k; i++){
            for(int j = 1; j < n; j++)
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
        return dp[n - 1];
    }
};
```