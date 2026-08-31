# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/2986326/](https://leetcode.com/problems/largest-sum-of-averages/solutions/2986326/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.
\uD83D\uDD35 Check out [YouTube Channel](https://www.youtube.com/@leetcodethehardway) if you are interested.

---

```cpp
class Solution {
public:
    double dfs(vector<vector<double>>& dp, vector<int>& nums, int k, int i) {
        // reached all elements
        if (i >= nums.size()) return 0;
        // cannot further partition
        if (k == 0) return INT_MIN;
        // the result has been calculated before
        if (dp[i][k] != -1) return dp[i][k];
        double mx = INT_MIN, sum = 0;
        for (int j = i; j < nums.size(); j++) {
            // sum from nums[i .. j]
            sum += nums[j];
            // current partition + the best result starting from the next index
            mx = max(mx, sum / (j - i + 1) + dfs(dp, nums, k - 1, j + 1));
        }
        // memorise the result
        return dp[i][k] = mx;
    }
    double largestSumOfAverages(vector<int>& nums, int k) {
        int n = nums.size();
        // The best score partitioning A[i:] into at most K parts
        vector<vector<double>> dp(n, vector<double>(k + 1, -1));
        // starting from index 0
        return dfs(dp, nums, k, 0);
    }
};
```