# Mask of Factors

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203758/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203758/)

---

In a square-free subset, each prime can appear only once (otherwise the multiple will include the square of that prime).

Thus, 11 numbers out of 30 can be excluded as they already include a repeated prime (e.g. 4, 8, 9, 12, etc.)

For the remaining numbers, we track their primes using a bit mask. There are 10 primes, so we only need 10 bits for memoisation.

The `f` array contains compressed prime factor masks for each number. 

We do Knapsack 0/1 DP, memoising by the current position `i` and `mask`.

**C++**
```cpp
int dp[1001][1024] = {}, mod = 1000000007;
int f[31] = {-1, 0, 1, 2, -1, 4, 3, 8, -1, -1, 5, 16, -1, 32, 9, 6,
             -1, 64, -1, 128, -1, 10, 17, 256, -1, -1, 33, -1, -1, 512, 7};
int dfs(int i, int mask, vector<int>& nums) {
    if (i >= nums.size())
        return 0;
    if (dp[i][mask] == 0) {
        dp[i][mask] = (1 + dfs(i + 1, mask, nums)) % mod;
        if (f[nums[i]] != -1 && (mask & f[nums[i]]) == 0)
            dp[i][mask] = (dp[i][mask] + 1 + dfs(i + 1, mask + f[nums[i]], nums)) % mod;
    }
    return dp[i][mask] - 1;
}
int squareFreeSubsets(vector<int>& nums) {
    return dfs(0, 0, nums);   
}
```