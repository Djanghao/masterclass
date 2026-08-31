# [Rust] O(n) readable solution using overlaps and two pointers.

**Author:** marccarre
**Votes:** 2
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/646813/](https://leetcode.com/problems/interval-list-intersections/solutions/646813/)

---

```rust
use std::cmp::{min, max};

const START: usize = 0;
const END: usize = 1;

fn overlap(u: &Vec<i32>, v: &Vec<i32>) -> bool {
    u[START] <= v[END] && v[START] <= u[END]
}

fn intersect(u: &Vec<i32>, v: &Vec<i32>) -> Vec<i32> {
    vec![max(u[START], v[START]), min(u[END], v[END])]
}

impl Solution {
    pub fn interval_intersection(a: Vec<Vec<i32>>, b: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut intersection = Vec::new();
        let (mut i, mut j) = (0, 0);
        while i < a.len() && j < b.len() {
            if overlap(&a[i], &b[j]) {
                intersection.push(intersect(&a[i], &b[j]));
            }
            if a[i][END] < b[j][END] {
                i += 1;
            } else {
                j += 1;
            }
        }
        intersection
    }
}
```
