# DP

**Author:** then00bprogrammer
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786579/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5786579/)

---

# Intuition
Try to calculate every possible OR value till an index of different length subsequences.

# Approach
1. Use DP with base case `dp[0][0][0]=1` (since an empty subsequence has OR zero).
2. Then for every index we've 2 choices either take that element or not take.
3. We iterate over all possible OR values (`x`) that could have been achieved before index `i` at a given length `len` (i.e., for subsequences of length `len` before index `i`).
4. Hence, transitions:
    `Not Take: dp[i][len][x] = dp[i-1][len][x]`
    `Take: dp[i][len][nums[i] | x] |= dp[i-1][len-1][x]`
5. Now build this table forward and backward, and at every index check every possible combination of ORs of length `k` foward and backward using DP table.

# Complexity
- Time complexity:
O(N * K * 129 + N * 129 * 129)

- Space complexity:
O(N * K * 129)

# Code
```cpp []
class Solution {
    vector<vector<vector<int>>> allPossibleORsTillAnIndex(vector<int>& nums, int k) {
        int n = nums.size();
        vector<vector<vector<int>>> dp(
            n, vector<vector<int>>(k + 1, vector<int>(129)));
        dp[0][1][nums[0]] = 1;
        dp[0][0][0] = 1;

        for (int i = 1; i < n; i++) {
            dp[i][0][0] = 1;
            for (int j = 1; j <= k; j++) {
                for (int x = 0; x <= 128; x++) {
                    if (!dp[i][j][x])
                        dp[i][j][x] = dp[i - 1][j][x];
                    int next = nums[i] | x;
                    if (dp[i - 1][j - 1][x])
                        dp[i][j][next] = dp[i - 1][j - 1][x];
                }
            }
        }
        return dp;
    }

public:
    int maxValue(vector<int>& nums, int k) {
        vector<vector<vector<int>>> left = allPossibleORsTillAnIndex(nums, k);
        reverse(begin(nums), end(nums));
        vector<vector<vector<int>>> right = allPossibleORsTillAnIndex(nums, k);
        reverse(begin(right), end(right));
        int n = nums.size();
        int res = 0;
        for (int i = k - 1; i + k < nums.size(); i++) {
            for (int a = 0; a <= 128; a++) {
                for (int b = 0; b <= 128; b++) {
                    if (left[i][k][a] && right[i + 1][k][b]) {
                        res = max(res, a ^ b);
                    }
                }
            }
        }
        return res;
    }
};
```