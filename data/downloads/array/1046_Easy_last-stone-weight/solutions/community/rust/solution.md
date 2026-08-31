# Rust heap and matching

**Author:** Minamikaze392
**Votes:** 12
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1921745/](https://leetcode.com/problems/last-stone-weight/solutions/1921745/)

---

Code is short thanks to Rust's pattern matching:
```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn last_stone_weight(stones: Vec<i32>) -> i32 {
        let mut heap = BinaryHeap::from(stones);
        loop {
            match (heap.pop(), heap.pop()) {
                (Some(a), Some(b)) => if a > b {
                    heap.push(a - b);
                }
                (Some(a), None) => return a,
                (None, _) => return 0,
            };
        }
    }
}
```