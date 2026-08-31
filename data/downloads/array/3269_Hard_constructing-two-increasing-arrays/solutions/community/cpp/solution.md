# Simple DP

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5703857/](https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5703857/)

---

# Intuition
Let dp[i][j] be the minimum largest number when fill the first i elements in nums1 and first j elements in nums2.

Then 
dp[i][j] = min of 

(1) dp[i - 1][j] + (2 or 1 depending on whether nums1[i - 1] has the same parity as dp[i - 1][j])


(2) dp[i][j - 1] + (2 or 1 depending on whether nums2[j - 1] has the same parity as dp[i - 1][j])

The answer is dp[nums1.size()][nums2.size()]



# Complexity
- Time complexity:
O(nums1.size() * nums2.size())

- Space complexity:
O(nums1.size() * nums2.size())

# Code
```cpp []
class Solution {
    int get(int x, int p) {
        return x + ((x ^ p) & 1 ? 1 : 2);
    }
public:
    int minLargest(vector<int>& nums1, vector<int>& nums2) {
        const int n1 = nums1.size(), n2 = nums2.size();
        vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1, INT_MAX));
        dp[0][0] = 0;
        for (int i = 0; i <= n1; ++i) {
            for (int j = !i; j <= n2; ++j) {
                if (i) {
                    dp[i][j] = get(dp[i - 1][j], nums1[i - 1]);
                }
                if (j) {
                    dp[i][j] = min(dp[i][j], get(dp[i][j - 1], nums2[j - 1]));
                }
            }
        }
        return dp[n1][n2];
    }
};
```