# Rust triangular code solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/1597637/](https://leetcode.com/problems/largest-triangle-area/solutions/1597637/)

---

```
impl Solution {
    pub fn largest_triangle_area(points: Vec<Vec<i32>>) -> f64 {
        let mut s = f64::MIN;
        for (i, p1) in points.iter().enumerate() {
            for (j, p2) in points[i + 1..].iter().enumerate() {
                for p3 in points[j + 1..].iter() {
                    if let [x1, y1] = p1[..] {
                        if let [x2, y2] = p2[..] {
                            if let [x3, y3] = p3[..] {
                                s = s.max(
                                    0.5 * ((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)).abs()
                                        as f64,
                                );
                            }
                        }
                    }
                }
            }
        }
        s
    }
}
```