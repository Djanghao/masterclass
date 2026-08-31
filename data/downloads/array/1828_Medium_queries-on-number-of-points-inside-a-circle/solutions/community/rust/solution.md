# Rust: Functional Solution

**Author:** seandewar
**Votes:** 7
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1245013/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1245013/)

---

```rust
impl Solution {
    pub fn count_points(points: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        queries.iter()
            .map(|q| {
                points.iter()
                    .filter(|p| q[2].pow(2) >= (p[0] - q[0]).pow(2) + (p[1] - q[1]).pow(2))
                    .count() as _
            })
            .collect()
    }
}
```