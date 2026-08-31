# Rust, DP, concise.

**Author:** dfomin
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418977/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418977/)

---

# Intuition
This is dynamic programming task. The only tricky part is to find subtask.
The subtask is to solve it for smaller number of piles (i left most piles) and for smaller k.
On each step we iterate over new pile for all numbers from `0` to `k` and search for best value of `l` coins from new pile and `k - l` from previous subtask.


# Code
```
use std::cmp::{min,max};

impl Solution {
    pub fn max_value_of_coins(piles: Vec<Vec<i32>>, k: i32) -> i32 {
        let k = k as usize;
        let mut dp = vec![vec![0; k + 1]; piles.len() + 1];
        for i in 1..dp.len() {
            for j in 1..k + 1 {
                let mut s = 0;
                for l in 0..min(j + 1, piles[i - 1].len() + 1) {
                    dp[i][j] = max(dp[i][j], s + dp[i - 1][j - l]);
                    if l < piles[i - 1].len() {
                        s += piles[i - 1][l];
                    }
                }
            }
        }

        return dp[piles.len()][k];
    }
}
```