# Rust ~8ms Clean Solution

**Author:** hong_zhao
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1924742/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1924742/)

---

```rust
use std::collections::BinaryHeap;

struct KthLargest {
    k: i32,
    heap: BinaryHeap<i32>,
}

impl KthLargest {

    fn new(k: i32, nums: Vec<i32>) -> Self {
        let mut _self = KthLargest {
            k: k,
            heap: BinaryHeap::with_capacity(k as usize + 1),
        };
        for n in nums {
            _self.add(n);
        }
        _self
    }
    
    fn add(&mut self, val: i32) -> i32 {
        self.heap.push(-val);
        if self.heap.len() > self.k as usize {
            self.heap.pop();
        }
        -self.heap.peek().unwrap()
    }
}
```