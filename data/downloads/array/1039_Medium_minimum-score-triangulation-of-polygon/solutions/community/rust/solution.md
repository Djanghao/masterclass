# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/3034410/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/3034410/)

---

# Code
```
impl Solution {
    pub fn min_score_triangulation(values: Vec<i32>) -> i32 {
        let n = values.len();
        let mut dp = vec![vec![0; n]; n];
        for j in 2..n {
            for i in (0..j - 1).rev() {
                dp[i][j] = i32::MAX;
                for k in i + 1..j {
                    dp[i][j] = dp[i][j].min(dp[i][k] + dp[k][j] + values[i] * values[j] * values[k]);
                }
            }
        }
        dp[0][n - 1]
    }
}
```