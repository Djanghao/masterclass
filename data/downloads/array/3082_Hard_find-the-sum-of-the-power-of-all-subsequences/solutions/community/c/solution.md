# 2 ^ (n - i)

**Author:** votrubac
**Votes:** 47
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884099/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/4884099/)

---

When we find `cnt` elements that sum to `k`, those elements appear in `2 ^ (n - cnt)` subsequences.

So, we can run 3D DP (i, cnt, sum) to find such elements and count subsequences.

We can further simplify this to 2D (thanks to [stanislav-iablokov](https://leetcode.com/stanislav-iablokov/)) by doing `2 ^ (n - i)` and multiplying the result by `2` when we *skip* an element.

Both formulas are equivalent if you think about it. Say `n` is 10, and we picked 3 elements and skipped 4 (therefore `i == 7`):
- `2 ^ (10 - 3)`
- `2 ^ 4 * 2 ^ (10 - 7)`
	- The result is the same (128) for both formulas.

**Complexity Analysis**
- 3D DP solution has a cubic time/memory complexity O(n * n * k), and it is accepted due to generous constraints.
- After simplifying DP from 3D to 2D, the time and memory complexity becomes quadratic O(n * k).
	- The memory optimization for the bottom-up solution reduced the memory complexity to O(k).

**Python 3**
```python
class Solution:
    def sumOfPower(self, nums: List[int], k: int) -> int:
        @cache
        def dfs(i: int, sum: int) -> int:
            if sum == k:
                return pow(2, len(nums) - i, 1000000007)
            if sum > k or i >= len(nums):
                return 0
            return (2 * dfs(i + 1, sum) + dfs(i + 1, sum + nums[i])) % 1000000007
        return dfs(0, 0)
```
**C++ Bottom-Up**
Idea by [lee215](https://leetcode.com/lee215/).
```cpp
int sumOfPower(vector<int>& nums, int k) {
    int dp[101] = { 1 }, mod = 1000000007;
    for (int n : nums)
        for (int sum = k; sum >= 0; sum -= 1)
            dp[sum] = (2LL * dp[sum] + (sum >= n ? dp[sum - n] : 0)) % mod;
    return dp[k];
}
```
**C++ Top-Down**
```cpp
int dp[101][101] = {}, mod = 1000000007;
int modPow(int x, unsigned int y, unsigned int m)
{
    if (y == 0)
        return 1;
    long p = modPow(x, y / 2, m) % m;
    p = (p * p) % m;
    return y % 2 ? (p * x) % m : p;
}
long long dfs(int i, int k, vector<int> &nums) {
    if (k == 0)
        return modPow(2, nums.size() - i, mod);
    if (k < 0 || i >= nums.size())
        return 0;
    if (dp[i][k] == 0)
        dp[i][k] = (1LL + 2 * dfs(i + 1, k, nums) + dfs(i + 1, k - nums[i], nums)) % mod;
    return dp[i][k] - 1;
}
int sumOfPower(vector<int>& nums, int k) {
    return dfs(0, k, nums);
}
```