# [C++|Java|Python3] O(Nsqrt(N))

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/3128770/](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/3128770/)

---

**Intuition**
We separate the region into large step and small step. The cuttint point is `sqrt(n)`. 

**C++**
```
class Solution {
public:
    vector<int> solve(vector<int>& nums, vector<vector<int>>& queries) {
        const int mod = 1'000'000'007; 
        int n = nums.size(), r = sqrt(n); 
        vector<vector<long>> dp(n, vector<long>(r)); 
        for (int i = n-1; i >= 0; --i) 
            for (int j = 0; j < r; ++j) {
                dp[i][j] = nums[i]; 
                if (i+j < n) dp[i][j] = (dp[i][j] + dp[i+j][j]) % mod; 
            }
        vector<int> ans; 
        for (auto& q : queries) {
            int x = q[0], y = q[1]; 
            if (y < r) ans.push_back(dp[x][y]); 
            else {
                long val = 0; 
                for (int j = x; j < n; j += y) val = (val + nums[j]) % mod; 
                ans.push_back(val); 
            }
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public int[] solve(int[] nums, int[][] queries) {
        final int mod = 1_000_000_007; 
        int n = nums.length, r = (int) Math.sqrt(n); 
        long[][] dp = new long[n][r]; 
        for (int i = n-1; i >= 0; --i) 
            for (int j = 0; j < r; ++j) {
                dp[i][j] = nums[i]; 
                if (i+j < n) dp[i][j] = (dp[i][j] + dp[i+j][j]) % mod; 
            }
        int[] ans = new int[queries.length]; 
        for (int i = 0; i < queries.length; ++i) {
            int x = queries[i][0], y = queries[i][1]; 
            if (y < r) ans[i] = (int) dp[x][y]; 
            else {
                long val = 0; 
                for (int j = x; j < n; j += y) val = (val + nums[j]) % mod; 
                ans[i] = (int) val; 
            }
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def solve(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        mod = 1_000_000_007
        n = len(nums)
        r = isqrt(n)
        dp = [[0]*r for _ in range(n)]
        for i in range(n-1, -1, -1): 
            for j in range(r): 
                dp[i][j] = nums[i]
                if i+j < n: dp[i][j] = (dp[i][j] + dp[i+j][j]) % mod
        ans = []
        for x, y in queries: 
            if y < r: ans.append(dp[x][y])
            else: 
                val = 0 
                for j in range(x, n, y): 
                    val = (val + nums[j]) % mod
                ans.append(val) 
        return ans
```