# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/3442436/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/3442436/)

---

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
  pub fn angle_clock(hour: i32, minutes: i32) -> f64 {
    let h = hour as f64 % 12f64;
    let m = minutes as f64;

    let h_add = 30f64 * m / 60f64;
    let h_angle = 30f64 * h;
    let hv = h_add + h_angle;

    let mv = 6f64 * m;

    let v = if mv < hv {
      hv - mv
    } else {
      mv - hv
    };

    if 180f64 < v {
      360f64 - v
    } else {
      v
    }
  }
}
```