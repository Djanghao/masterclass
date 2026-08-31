# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2874842/](https://leetcode.com/problems/minimum-average-difference/solutions/2874842/)

---

\uD83D\uDD34 Check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
\uD83D\uDFE0 Check out our [Discord](https://discord.gg/Nqm4jJcyBf) for live discussion.
\uD83D\uDFE2 Give a star on [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post if you like it.

---

```cpp
class Solution {
public:
    int minimumAverageDifference(vector<int>& nums) {
        int ans = 0, n = nums.size(), mi = INT_MAX;
        // since we need the sum for first i + 1 and last n - i - 1 elements
        // we can pre-calculate it first
        // it is called prefix sum and suffix sum
        vector<long long> pref(n);
        // prev[0] is the first element
        pref[0] = nums[0];
        // starting from i = 1, pref[i] is the sum + the current element
        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + nums[i];
        // then we can iterate each number
        for (int i = 0; i < n; i++) {
            // now we know the prefix sum
            // the suffix sum is simply pref[n - 1] - pref[i]
            long long k = abs((pref[i] / (i + 1)) - ((pref[n - 1] - pref[i]) / max(n - i - 1, 1)));
            // check the min and update ans
            if (k < mi) {
                mi = k;
                ans = i;
            }
        }
        return ans;
    }
};
```