# Rust Iterator

**Author:** tmechelke
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2170128/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/2170128/)

---

```
impl Solution {
    pub fn nearest_valid_point(x: i32, y: i32, points: Vec<Vec<i32>>) -> i32 {
        points
            .iter()
            .enumerate()
            .filter(|(_, point)| point[0] == x || point[1] == y)
            .min_by_key(|(_, point)| (point[0] - x).abs() + (point[1] - y).abs())
            .map(|(index, _)| index as i32)
            .unwrap_or(-1)
    }
}
```