# Best Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/3157732/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/3157732/)

---


```
class Solution {
public:
    int n, INF = 200 * 1e6;
    int memo[200][200] = {};
    int minSpaceWastedKResizing(vector<int> &nums, int k) {
        memset(memo, -1, sizeof(memo));
        n = nums.size();
        return dp(nums, 0, k);
    }
    int dp(vector<int> &nums, int i, int k) {
        if (i == n) return 0;
        if (k == -1) return INF;
        if (memo[i][k] != -1) return memo[i][k];
        int ans = INF, maxNum = nums[i], totalSum = 0;
        for (int j = i; j < n; ++j) {
            maxNum = max(maxNum, nums[j]);
            totalSum += nums[j];
            int wasted = maxNum * (j - i + 1) - totalSum;
            ans = min(ans, dp(nums, j + 1, k - 1) + wasted);
        }
        return memo[i][k] = ans;
    }
};
```