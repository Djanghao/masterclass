# [C++] Short O(N) hashmap DP solution

**Author:** iszov
**Votes:** 31
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1510925/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/1510925/)

---

Suppose dp[i][j]:
`dp[i][0]` = number of subarrays that end at position `i` and have equal amout of 0 and 1
`dp[i][1]` = number of subarrays that end at position `i` and have more 1s than 0

If `nums[i] == 1` then ` dp[1] = dp[i-1][0] + dp[i-1][1] + 1`
If `nums[i] == 0` then ` dp[1] = dp[i-1][1] - dp[i][0]` - we remove positions that had number of 1s greater than number of 0s by just 1.

Also we keep track of preffx sum of difference between number of 1s and 0s.

```
class Solution {
public:
    int subarraysWithMoreZerosThanOnes(const std::vector<int>& nums) {
        static constexpr int MOD = 1000000007;
        int sum = 0;
        std::vector<int> dp = {0, 0};
        // dp[0] = #have equal amout of 0 and 1
        // dp[1] = #have more 1s than 0
        std::unordered_map<int, int> mp;
        mp[0] = 1;
        int ans = 0;
        for (int num : nums) {
            std::vector<int> dp_prev = dp;
            if (num == 1) {
                ++sum;
            } else {
                --sum;
            }
            dp[0] = mp[sum];
            if (num == 1) {
                dp[1] = (dp_prev[0] + dp_prev[1] + 1) % MOD;
            } else if (num == 0) {
                dp[1] = (dp_prev[1] - dp[0] + MOD) % MOD;
            }
            ++mp[sum];
            ans = (ans + dp[1]) % MOD;
        }
        return ans;
    }
};
```