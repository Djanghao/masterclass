# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/1183733/](https://leetcode.com/problems/powerful-integers/solutions/1183733/)

---

```rust
use std::collections::HashSet;
use std::iter::successors;

impl Solution {
    pub fn powerful_integers(x: i32, y: i32, bound: i32) -> Vec<i32> {
        successors(Some(1), |n| Some(n * x).filter(|&xi| x > 1 && xi < bound))
            .flat_map(|xi| {
                successors(Some(1), move |n| {
                    Some(n * y).filter(|&yj| y > 1 && yj <= bound - xi)
                })
                .filter_map(move |yj| Some(xi + yj).filter(|&sum| sum <= bound))
            })
            .collect::<HashSet<_>>()
            .into_iter()
            .collect()
    }
}
```