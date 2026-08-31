# Rust | BinaryHeap + HashSet

**Author:** icyrainz
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452083/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452083/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use a `smallest` variable to keep track of the smallest number in the continuous part of the infinite range.
Use a combination of HashSet and BinaryHeap for tracking the values added back.

Please note that Rust BinaryHeap is a max-heap by default so we will operate on the negative equivalent of the input.
# Complexity
- Time complexity: $$O(logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{BinaryHeap, HashSet};

struct SmallestInfiniteSet {
    heap: BinaryHeap<i32>,
    set: HashSet<i32>,
    smallest: i32,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl SmallestInfiniteSet {

    fn new() -> Self {
        SmallestInfiniteSet {
            heap: BinaryHeap::new(),
            set: HashSet::new(),
            smallest: 1,
        }
    }
    
    fn pop_smallest(&mut self) -> i32 {
        match self.heap.pop() {
            Some(n) => {
                self.set.remove(&n);
                -n
            },
            None => {
                self.smallest += 1;
                self.smallest - 1
            }
        }
    }
    
    fn add_back(&mut self, num: i32) {
        if num >= self.smallest { return; }
        if !self.set.contains(&(-num)) {
            self.heap.push(-num);
            self.set.insert(-num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * let obj = SmallestInfiniteSet::new();
 * let ret_1: i32 = obj.pop_smallest();
 * obj.add_back(num);
 */
```