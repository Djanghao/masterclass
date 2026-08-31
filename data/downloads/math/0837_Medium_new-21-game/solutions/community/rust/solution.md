# Rust dp solution

**Author:** arbuztw
**Votes:** 1
**Link:** [https://leetcode.com/problems/new-21-game/solutions/3562630/](https://leetcode.com/problems/new-21-game/solutions/3562630/)

---

```
impl Solution {
    pub fn new21_game(n: i32, k: i32, max_pts: i32) -> f64 {
        let (n, k, max_pts) = (n as usize, k as usize, max_pts as usize);
        let total_max_pts = k + max_pts;
        let mut dp: Vec<f64> = Vec::with_capacity(total_max_pts);
        let mut sum: f64 = 0.0;
        dp.push(1.0);
        for i in 1..total_max_pts {
            if i < k + 1 {
                sum += dp[i-1];
            }
            if i > max_pts {
                sum -= dp[i-max_pts-1];
            }
            dp.push(sum / max_pts as f64);
        }
        dp.into_iter().take(n+1).skip(k).sum()
    }
}
```
