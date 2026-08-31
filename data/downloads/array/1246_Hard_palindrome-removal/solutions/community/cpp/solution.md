# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-removal/solutions/3582471/](https://leetcode.com/problems/palindrome-removal/solutions/3582471/)

---

```C++ []
class Solution {
public:
    vector<vector<int>> dp;
    int minimumMoves(vector<int>& arr) {
        int n = arr.size();
        dp.resize(n,vector<int>(n,-1));
        return dfs(arr,0,n-1);
    }
    int dfs(vector<int>& nums, int l, int r){
        int n = nums.size();
        if(l > r) return 0;
        if(l == r) return 1;
        if(dp[l][r] != -1) return dp[l][r];
        int res = 1 + dfs(nums,l+1,r);

        if(l+1<n && nums[l] == nums[l+1]){
            res = min(res, 1+ dfs(nums,l+2,r));
        }
        for(int i = l+2;i<=r;i++){
            if(nums[i] == nums[l]){
                res = min(res, dfs(nums,l+1,i-1) + dfs(nums,i+1,r));
            }
        }
        return dp[l][r] = res;
    }
};
```

```Python3 []
class Solution(object):

    def minimumMoves(self, A):
        @lru_cache(None)
        
        def dp(i, j):
            if i > j: return 0
            res = dp(i, j - 1) + 1
            if A[j] == A[j - 1]:
                res = min(res, dp(i, j - 2) + 1)
            for k in range(i, j - 1):
                if A[j] == A[k]:
                    res = min(res, dp(i, k - 1) + dp(k + 1, j - 1))
            return res
        return dp(0, len(A) - 1)
```

```Java []
class Solution  {
public int minimumMoves(int[] arr) {
     int n = arr.length;
        int[][] dp = new int[n][n];
        
        for (int i = n-1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (i == j) dp[i][j] = 1;
                else if (i+1 == j) {
                    dp[i][j] = arr[i] == arr[j] ? 1 : 2; 
                } else {
                    int cand1 = n, cand2 = n, cand3 = n;
                    if (arr[i] == arr[j]) {
                        cand1 = dp[i+1][j-1];
                    }
                    cand2 = Math.min(dp[i+1][j], dp[i][j-1]) + 1;
                    for (int k = i+1; k < j-1; k++) {
                        cand3 = Math.min(cand3, dp[i][k] + dp[k+1][j]);
                    }
                    dp[i][j] = Math.min(cand1, Math.min(cand2, cand3));
                }
            }
        }
        return dp[0][n-1];
}
}
```