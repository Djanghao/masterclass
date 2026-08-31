# Rust solution with windows

**Author:** BigMih
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/1425136/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/1425136/)

---

```
impl Solution {
    pub fn check_straight_line(coordinates: Vec<Vec<i32>>) -> bool {
        if coordinates.len() == 2 {
            return true;
        }

        // check k1 == k2 for 3 points => (y2 - y1) / (x2 - x1) == (y1 - y0) / (x1 - x0)
        // transform to mul => (y2 - y1) * (x1 - x0) == (x2 - x1) * (y1 - y0)
        coordinates.windows(3).all(|points| {
            let (p2, p1, p0) = (&points[2], &points[1], &points[0]);
            (p2[1] - p1[1]) * (p1[0] - p0[0]) == (p2[0] - p1[0]) * (p1[1] - p0[1])
        })
    }
}
```