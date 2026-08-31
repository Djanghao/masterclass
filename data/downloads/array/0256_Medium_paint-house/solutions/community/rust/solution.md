# In Rust (not idiomatic, still learning)

**Author:** lettty17
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house/solutions/707935/](https://leetcode.com/problems/paint-house/solutions/707935/)

---

```
use std::cmp;

impl Solution {
    pub fn min_cost(costs: Vec<Vec<i32>>) -> i32 {
        let N = costs.len();
        let mut dp = vec![vec![0i32; 3]; N];
        
        if N == 0 {
            return 0
        }
        
        dp[0][0] = costs[0][0];
        dp[0][1] = costs[0][1];
        dp[0][2] = costs[0][2];
        
        for i in 1..N {
            let color = costs[i][0];
            dp[i][0] = i32::max_value();
            dp[i][0] = cmp::min(dp[i][0], color + dp[i - 1][1]);
            dp[i][0] = cmp::min(dp[i][0], color + dp[i - 1][2]);
            
            let color = costs[i][1];
            dp[i][1] = i32::max_value();
            dp[i][1] = cmp::min(dp[i][1], color + dp[i - 1][0]);
            dp[i][1] = cmp::min(dp[i][1], color + dp[i - 1][2]);
            
            let color = costs[i][2];
            dp[i][2] = i32::max_value();
            dp[i][2] = cmp::min(dp[i][2], color + dp[i - 1][0]);
            dp[i][2] = cmp::min(dp[i][2], color + dp[i - 1][1]);
        }
        
        cmp::min(dp[N-1][0], cmp::min(dp[N-1][1], dp[N-1][2]))
    }
}
```