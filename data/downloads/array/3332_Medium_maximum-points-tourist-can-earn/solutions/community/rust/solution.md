# Rust One liner

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6127376/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6127376/)

---

# Intuition
The problem is about maximizing the score over a series of k days, with n cities. Each day, we can either stay in the same city or travel to another city. The goal is to maximize the score based on the given stay_score and travel_score matrices.

We are given the scores for staying in a city and traveling between cities. The decision for each day is whether to stay or travel, and we want to track the maximum possible score as we progress through the days.

# Complexity
- Time complexity: O(k\xD7n<sup>2</sup>)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k\xD7n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn max_score(n: i32, k: i32, stay_score: Vec<Vec<i32>>, travel_score: Vec<Vec<i32>>) -> i32 {
        let k = k as usize;
        let n = n as usize;
        
        let mut dp = vec![vec![0; n]; k + 1];
        
        for i in 1..=k {
            for a in 0..n {
                for b in 0..n {
                    if a == b {
                        dp[i][a] = dp[i][a].max(dp[i - 1][b] + stay_score[i - 1][b]);
                    } else {
                        dp[i][a] = dp[i][a].max(dp[i - 1][b] + travel_score[b][a]);
                    }
                }
            }
        }

        let mut ans = 0;
        for &num in &dp[k] {
            ans = ans.max(num);
        }

        ans
    }
}

```