# DP with Tracking

**Author:** votrubac
**Votes:** 36
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5146002/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5146002/)

---

We can start with any number. The cost does not change if we rotate the result array; only the order matter, not the position.

We start from zero, and run DFS. We memoize the best result in the `dp` array for:
- the previous number (`p`)
- used numbers (`mask`).

In addition to the minimum cost, we also need to track the value that produced the best result in `val[p][mask]`.

Finally, we reconstruct the array one-by-one, starting with `val[0][1]`, and updating the previous value and mask as we go.

**Complexity Analysis**
- Time: O(n ^ 2 * 2 ^ n)
- Memory: O(n * 2 ^ n)

**C++**
```cpp
int val[14][16384], dp[14][16384];
class Solution {
public:
int dfs(unsigned int mask, int p, vector<int>& nums) {
    if (popcount(mask) == nums.size())
        return abs(p - nums[0]);
    if (dp[p][mask] < 0) {
        dp[p][mask] = INT_MAX;
        for (int n = 1; n < nums.size(); ++n)
            if (((1 << n) & mask) == 0) {
                int res_n = abs(p - nums[n]) + dfs(mask + (1 << n), n, nums);
                if (res_n < dp[p][mask]) {
                    dp[p][mask] = res_n;
                    val[p][mask] = n;    
                }
            }
    }
    return dp[p][mask];
}
vector<int> findPermutation(vector<int>& nums) {
    memset(dp, -1, sizeof(dp));
    dfs(1, 0, nums);
    vector<int> res{0};
    for (uint mask = 1; popcount(mask) < nums.size(); mask += (1 << res.back()))
        res.push_back(val[res.back()][mask]);
    return res;
}
};
```