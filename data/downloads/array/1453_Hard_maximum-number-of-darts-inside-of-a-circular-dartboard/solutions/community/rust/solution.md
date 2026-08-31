# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/3146699/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/3146699/)

---

# Code
```
impl Solution {
    pub fn num_points(darts: Vec<Vec<i32>>, r: i32) -> i32 {
        let mut res = 1;
        let r = r as f64;
        for i in 0..darts.len() - 1 {
            for j in i + 1..darts.len() {
                let x1 = darts[i][0] as f64;
                let y1 = darts[i][1] as f64;
                let x2 = darts[j][0] as f64;
                let y2 = darts[j][1] as f64;
                let d = ((x1 - x2).powi(2) + (y1 - y2).powi(2)) / 4.0;
                if d > r.powi(2) {
                    continue;
                }
                let x0 = (x1 + x2) / 2.0 + (y2 - y1) * (r.powi(2) - d).sqrt() / (d * 4.0).sqrt();
                let y0 = (y1 + y2) / 2.0 - (x2 - x1) * (r.powi(2) - d).sqrt() / (d * 4.0).sqrt();
                let mut cnt = 0;
                for point in &darts {
                    let x = point[0] as f64;
                    let y = point[1] as f64;
                    if (x - x0).powi(2) + (y - y0).powi(2) <= r.powi(2) + 0.00001 {
                        cnt += 1;
                    }
                }
                res = res.max(cnt);
                let x0 = (x1 + x2) / 2.0 - (y2 - y1) * (r.powi(2) - d).sqrt();
                let y0 = (y1 + y2) / 2.0 + (x2 - x1) * (r.powi(2) - d).sqrt();
                let mut cnt = 0;
                for point in &darts {
                    let x = point[0] as f64;
                    let y = point[1] as f64;
                    if (x - x0).powi(2) + (y - y0).powi(2) <= r.powi(2) + 0.00001 {
                        cnt += 1;
                    }
                }
                res = res.max(cnt);
            }
        }
        res
    }
}
```