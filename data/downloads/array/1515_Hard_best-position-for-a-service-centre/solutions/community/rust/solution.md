# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/3162833/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/3162833/)

---

# Code
```
impl Solution {
    pub fn get_min_dist_sum(positions: Vec<Vec<i32>>) -> f64 {
        fn get_dist_sum(positions: &Vec<Vec<i32>>, x: f64, y: f64) -> f64 {
            let mut sum = 0.0;
            for p in positions {
                sum += ((p[0] as f64 - x).powi(2) + (p[1] as f64 - y).powi(2)).sqrt();
            }
            sum
        }

        let mut x = 0.0;
        let mut y = 0.0;
        for p in &positions {
            x += p[0] as f64;
            y += p[1] as f64;
        }
        x /= positions.len() as f64;
        y /= positions.len() as f64;
        let mut step = 100.0;
        let mut min_dist = std::f64::MAX;
        while step > 1e-6 {
            let mut found = false;
            for dx in &[-1.0, 0.0, 1.0] {
                for dy in &[-1.0, 0.0, 1.0] {
                    let nx = x + dx * step;
                    let ny = y + dy * step;
                    let dist = get_dist_sum(&positions, nx, ny);
                    if dist < min_dist {
                        min_dist = dist;
                        x = nx;
                        y = ny;
                        found = true;
                    }
                }
            }
            if !found {
                step /= 2.0;
            }
        }
        min_dist
    }
}
```