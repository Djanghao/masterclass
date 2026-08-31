# Rust bottom up solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/3338917/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/3338917/)

---

# Code
```
impl Solution {
    pub fn minimize_the_difference(mat: Vec<Vec<i32>>, target: i32) -> i32 {
        let mut dp = vec![vec![false; 5000]; mat.len() + 1];
        dp[0][0] = true;
        for i in 0..mat.len() {
            for j in 0..mat[0].len() {
                for k in 0..dp[i].len() {
                    if dp[i][k] {
                        dp[i + 1][k + mat[i][j] as usize] = true;
                    }
                }
            }
        }
        let mut min_diff = i32::MAX;
        for i in 0..5000 {
            if dp[mat.len()][i] {
                min_diff = min_diff.min((target - i as i32).abs())
            }
        }
        min_diff       
    }
}
```