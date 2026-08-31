# Beats 100% + Video | Java C++ Python

**Author:** jeevankumar159
**Votes:** 34
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3826440/](https://leetcode.com/problems/predict-the-winner/solutions/3826440/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/OO7KUGUJHRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    int[][] dp;
    
    private int score(int[] nums, int l, int r) {
        if (dp[l][r] != -1) {
            return dp[l][r];
        }
        if (l == r) {
            return nums[l];
        }
        
        int left = nums[l] - score(nums, l + 1, r);
        int right = nums[r] - score(nums, l, r - 1);
        dp[l][r] = Math.max(left, right);
        
        return dp[l][r];
    }
    
    public boolean PredictTheWinner(int[] nums) {
        int n = nums.length;
        dp = new int[n][n];
        for (int i = 0; i < n; ++i) {
            Arrays.fill(dp[i], -1);
        }
        
        return score(nums, 0, n - 1) >= 0;
    }
}
```

```
class Solution {
private:
    vector<vector<int>> dp;
    
    int score(vector<int>& nums, int l, int r) {
        if (dp[l][r] != -1) {
            return dp[l][r];
        }
        if (l == r) {
            return nums[l];
        }
        
        int left = nums[l] - score(nums, l + 1, r);
        int right = nums[r] - score(nums, l, r - 1);
        dp[l][r] = max(left, right);
        
        return dp[l][r];
    }
    
public:
    bool PredictTheWinner(vector<int>& nums) {
        int n = nums.size();
        dp = vector<vector<int>>(n, vector<int>(n, -1));
        
        return score(nums, 0, n - 1) >= 0;
    }
};
```

```
class Solution:
    def score(self, nums, l, r, dp):
        if dp[l][r] != -1:
            return dp[l][r]
        if l == r:
            return nums[l]
        
        left = nums[l] - self.score(nums, l + 1, r, dp)
        right = nums[r] - self.score(nums, l, r - 1, dp)
        dp[l][r] = max(left, right)
        
        return dp[l][r]
    
    def PredictTheWinner(self, nums):
        n = len(nums)
        dp = [[-1 for _ in range(n)] for _ in range(n)]
        
        return self.score(nums, 0, n - 1, dp) >= 0

```