# Rust | Two Heaps

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3791204/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3791204/)

---

# Intuition
As with all problems that require tracking the `i-th` largest number (e.g. median) in a data stream, two heaps is the way to go.

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

struct SORTracker {
    heap_frnt: BinaryHeap<(Reverse<i32>, String)>,
    heap_back: BinaryHeap<(i32, Reverse<String>)>,
}

impl SORTracker {
    fn new() -> Self {
        let heap_frnt = BinaryHeap::new();
        let heap_back = BinaryHeap::new();

        Self { heap_frnt, heap_back }
    }
    
    fn add(&mut self, name: String, score: i32) {
        // push to front while keeping its size!!
        self.heap_frnt.push((Reverse(score), name));
        let (Reverse(score_prev), name_prev) = self.heap_frnt.pop().unwrap();
        self.heap_back.push((score_prev, Reverse(name_prev)));
    }
    
    fn get(&mut self) -> String {
        let (score, Reverse(name)) = self.heap_back.pop().unwrap();
        self.heap_frnt.push((Reverse(score), name.clone()));
        name
    }
}

```