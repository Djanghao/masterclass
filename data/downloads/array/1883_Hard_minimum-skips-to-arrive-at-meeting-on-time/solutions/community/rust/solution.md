# Be careful about floating point precision

**Author:** Teapot
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1803225/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1803225/)

---

If distance = 100000 and speed = 75000.

time = 100000.0 / 75000.0 = 4 / 3 = 1.3333333333333332593184650249895639717578887939453125

However, depending on the floating point rounding mode, it's possible that 40.0 + 4/3 = 41.33333333333333570180911920033395290374755859375

So 40.0 + 4/3 + 4/3 + 4/3 > 44.0

My workaround is `x = (x * 100000000.0).floor() / 100000000.0`.

```
fn trim_minor_tail(x: f64) -> f64 {
    return (x * 100000000.0).floor() / 100000000.0;
}

impl Solution {
    pub fn min_skips(dist: Vec<i32>, speed: i32, hours_before: i32) -> i32 {
        let n = dist.len();
        let max_possible_skips = dist.len() - 1;
        let time: Vec<f64> = dist.into_iter().map(|d| (d as f64) / (speed as f64)).collect();
        
        // i = 0
        let mut dp: Vec<f64> = vec![time[0]; max_possible_skips + 1];
        
        for i in 1..n {
            for j in (1..=max_possible_skips).rev() {
                let opt1 = dp[j].ceil() + time[i];
                let opt2 = trim_minor_tail(dp[j-1] + time[i]);
                if opt1 < opt2 {
                    dp[j] = opt1;
                } else {
                    dp[j] = opt2;
                }
            }
            // j = 0;
            dp[0] = dp[0].ceil() + time[i];
        }
        
        return (0..=max_possible_skips).filter(|&n| dp[n] <= hours_before as f64).min().map(|n| n as i32).unwrap_or(-1);
    }
}
```