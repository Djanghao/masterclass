# Inversion 2D DP

**Author:** votrubac
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1390104/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/1390104/)

---

I first solved this problem using 3D DP: `[i][j][k]`, where `j` defines the current size of the array. It took me a while to get it accepted, as I was getting TLEs.

In order to solve it using 2D DP, we need to flip the problem. Instead of resizing the dynamic array, we split the `nums` array to `k + 1` intervals. The array size does not change within that invernal, so that the size of the array for each interval is the largest element in that interval.

This way, we just need to find splits that lead to the minumum waste.

> Also it's easy to calculate the penalty for the interval: multiply the largest element to the interval size, and then subtract the interval sum.

This way, we only care about `i` and `k`, where `i` defines the start of an interval.

**C++**
```cpp
int dp[201][201] = {[0 ... 200][0 ... 200] = -1};
int dfs(vector<int>& nums, int i, int k) {
    if (i + k >= nums.size())
        return 0;
    if (k < 0)
        return 1000000000;
    if (dp[i][k] == -1) {
        dp[i][k] = dfs(nums, i + 1, k - 1);
        int mx = nums[i], sum = nums[i];
        for (int j = i + 1; j < nums.size(); ++j) {
            mx = max(mx, nums[j]);
            sum += nums[j];
            int diff = mx * (j - i + 1) - sum;
            dp[i][k] = min(dp[i][k], diff + dfs(nums, j + 1, k - 1));    
        }
    }
    return dp[i][k];
}
int minSpaceWastedKResizing(vector<int>& nums, int k) {
    return dfs(nums, 0, k + 1);
}
```