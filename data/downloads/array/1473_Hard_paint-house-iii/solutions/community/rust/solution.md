# Rust bottom-up approach

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/3604808/](https://leetcode.com/problems/paint-house-iii/solutions/3604808/)

---

# Code
```
impl Solution {
    pub fn min_cost(houses: Vec<i32>, cost: Vec<Vec<i32>>, m: i32, n: i32, target: i32) -> i32 {
        const MAX: i32 = 1000001;
        let mut dp = vec![vec![vec![MAX; target as usize + 1]; n as usize]; m as usize + 1];
        for j in 0..n as usize {
            if houses[0] as usize == j + 1 {
                dp[0][j][1] = 0;
            } else if houses[0] == 0 {
                dp[0][j][1] = cost[0][j];
            }
        }

        for i in 1..m as usize {
            for j in 0..n as usize {
                for k in 1..=target as usize {
                    if houses[i] != 0 && j as i32 + 1 != houses[i] {
                        continue;
                    }
                    let mut curr_cost = MAX;
                    for prev_color in 0..n as usize {
                        if j == prev_color {
                            curr_cost = curr_cost.min(dp[i - 1][prev_color][k]);
                        } else {
                            curr_cost = curr_cost.min(dp[i - 1][prev_color][k - 1]);
                        }
                    }

                    let cost_to_paint = if houses[i] != 0 { 0 } else { cost[i][j] };
                    dp[i][j][k] = curr_cost + cost_to_paint;
                }
            }
        }

        let mut ans = MAX;
        for j in 0..n as usize {
            ans = ans.min(dp[m as usize - 1][j][target as usize]);
        }
        if ans == MAX {
            -1
        } else {
            ans
        }
    }
}
```