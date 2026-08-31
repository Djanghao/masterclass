# Rust: BinaryHeap

**Author:** seandewar
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1261057/](https://leetcode.com/problems/jump-game-vi/solutions/1261057/)

---

```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_result(nums: Vec<i32>, k: i32) -> i32 {
        nums.into_iter()
            .enumerate()
            .scan(BinaryHeap::with_capacity(k as _), |heap, (i, x)| {
                while i - heap.peek().map_or(i, |&(_, j)| j) > k as usize {
                    heap.pop();
                }
                let max = x + heap.peek().map(|&(y, _)| y).unwrap_or(0);
                heap.push((max, i));
                Some(max)
            })
            .last()
            .unwrap()
    }
}
```