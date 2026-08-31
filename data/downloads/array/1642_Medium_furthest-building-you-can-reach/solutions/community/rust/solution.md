# Rust: Min Heap Solution

**Author:** seandewar
**Votes:** 2
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1177733/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1177733/)

---

```rust
use std::{cmp::Reverse, collections::BinaryHeap};

impl Solution {
    pub fn furthest_building(heights: Vec<i32>, mut bricks: i32, ladders: i32) -> i32 {
        let mut min_heap = BinaryHeap::with_capacity(ladders as usize + 1);
        (1..heights.len())
            .map(|i| heights[i] - heights[i - 1])
            .take_while(|&diff| {
                if diff > 0 {
                    min_heap.push(Reverse(diff));
                    if min_heap.len() > ladders as usize {
                        bricks -= min_heap.pop().unwrap().0;
                    }
                }
                bricks >= 0
            })
            .count() as _
    }
}
```