# Recursive DP

**Author:** cjcoax
**Votes:** 1
**Link:** [https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1703727/](https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/1703727/)

---

Recursive DP, the only trick is that every nums[i] is bounded to 1...100.
So max we can take from one array is 5,000 (when all numbers are 100 and we take half of the items), and hope that the second array has 100 for all of the remaining 50 elements.

If current index is taken from nums1, we add to overall sum, if current index is
taken from nums2, we subtract from overall sum. And at each recursion, we either take this index from nums1 or nums2.

At any moment if overall sum == 0, we increment result by 1.

Upvote if it helped! :) 

```
class Solution {
    int n = 0;
    int MOD = 1'000'000'007;
    int dp[100][10010];
public:
    int dfs(int idx, int sum, vector<int>& nums1, vector<int>& nums2) {
        if (idx == n) {
            return sum == 0;
        }
        int key = sum + 5000;
        if (key > 10000 || key < 0) {
            return 0;
        }
        if (dp[idx][key] == -1) {
            int res = 0;
            if (sum == 0) {
                res += 1;
            }
            if (sum < 5000) {
                res = (res + dfs(idx+1, sum + nums1[idx], nums1, nums2))%MOD;
            }
            if (sum > -5000) {
                res = (res + dfs(idx+1, sum - nums2[idx], nums1, nums2))%MOD;
            }
            dp[idx][key] = res;
        }
        return dp[idx][key];
    }
    int countSubranges(vector<int>& nums1, vector<int>& nums2) {
        n = nums1.size();
        memset(dp, -1, sizeof dp);
        long long res = 0;
        for (int i = 0 ; i < n; i++) {
            res += (dfs(i+1, nums1[i], nums1, nums2) + dfs(i+1, -nums2[i], nums1, nums2))%MOD;
            res %= MOD;
        }
        return res;
    }
};
```