# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3109398/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3109398/)

---

# Code
```
impl Solution {
    pub fn check_overlap(radius: i32, x_center: i32, y_center: i32, x1: i32, y1: i32, x2: i32, y2: i32) -> bool {
        let x = if x_center < x1 {
            x1
        } else if x_center > x2 {
            x2
        } else {
            x_center
        };
        let y = if y_center < y1 {
            y1
        } else if y_center > y2 {
            y2
        } else {
            y_center
        };
        let dx = x_center - x;
        let dy = y_center - y;
        dx * dx + dy * dy <= radius * radius
    }
}
```