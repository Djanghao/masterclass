# [Python3] dp

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/1429569/](https://leetcode.com/problems/toss-strange-coins/solutions/1429569/)

---


```
class Solution:
    def probabilityOfHeads(self, prob: List[float], target: int) -> float:
        
        @cache
        def fn(i, k):
            """Return probability of obtaining k heads from coins[i:]."""
            if k < 0: return 0 
            if i == len(prob): return k == 0
            return prob[i]*fn(i+1, k-1) + (1-prob[i])*fn(i+1, k)
        
        return fn(0, target)
```

**Bottom-up implementation**
```
class Solution:
    def probabilityOfHeads(self, prob: List[float], target: int) -> float:
        dp = [[0]*(1 + target) for _ in range(1 + len(prob))]
        dp[-1][0] = 1
        for i in reversed(range(len(prob))): 
            for j in range(target+1): 
                if j: dp[i][j] = prob[i]*dp[i+1][j-1]
                dp[i][j] += (1-prob[i])*dp[i+1][j]
        return dp[0][-1]
```

```
class Solution {
public:
    double probabilityOfHeads(vector<double>& prob, int target) {
        int n = prob.size(); 
        vector<vector<double>> dp(1+n, vector<double>(1+target)); 
        dp[n][0] = 1; 
        for (int i = n-1; i >= 0; --i) 
            for (int j = 0; j <= target; ++j) {
                if (j) dp[i][j] = prob[i]*dp[i+1][j-1]; 
                dp[i][j] += (1-prob[i])*dp[i+1][j]; 
            }
        return dp[0][target]; 
    }
};
```