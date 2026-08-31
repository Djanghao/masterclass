# 2D DP (Oh it is fast)

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4949120/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4949120/)

---

This code is accepted with runtime < 250 ms. The key is to solve independently for each power `pwr` to reduce memoisation footprint.

We use a set to make sure we process each power once. For each power, we run DFS and select elements so that the power does not decrease.

When runnign DFS, we track: 
- Current position `i`,
- Position of the last included element `p`,
- Number of remainig elements to pick `k`,
- Flag `eq` indicating whether we included elements with the difference equal to the power.

Because we sort the array, we need to check the power againts the last included element `p` only.

Okay, that is 3D DP (i * p * k * eq = 50 * 50 * 50 * 2), which is not bad at all.

The final optimization step is to realize that we do not need to track `i`. We only need to memoise results for the last included element.

This leads to 2D DP (50 * 50 * 2).

**Complexity Analysis**
- Runtime: O(n ^ 4), for O(n ^ 2) powers, we perform O(n ^ 2) operations.
- Memory: O(n ^ 2) to track powers and for memoisation.

**C++**
```cpp
int dp[50][50][2], mod = 1000000007;
int dfs(int i, int p, int k, int pwr, bool eq, vector<int>& n) {
    if (k == 0)
        return eq ? pwr : 0;
    if (i >= n.size())
        return 0;
    if (dp[p][k][eq] == -1) {
        dp[p][k][eq] = dfs(i + 1, p, k, pwr, eq, n);
        if (abs(n[i] - n[p]) >= pwr)
            dp[p][k][eq] = (dp[p][k][eq] + dfs(i + 1, i, k - 1, pwr, eq | (n[i] - n[p] == pwr), n)) % mod;
    }
    return dp[p][k][eq];
}
int sumOfPowers(vector<int>& nums, int k) {
    long long res = 0;
    sort(begin(nums), end(nums));
    set<int> pwrs;
    for (int i = 0; i < nums.size(); ++i)
        for (int j = i + 1; j < nums.size(); ++j)
            if (nums[i] != nums[j] && pwrs.insert(nums[j] - nums[i]).second) {
                memset(dp, 255, sizeof(dp));
                res = (res + dfs(0, nums.size() - 1, k, nums[j] - nums[i], false, nums)) % mod;
            }
    return res;
}
```