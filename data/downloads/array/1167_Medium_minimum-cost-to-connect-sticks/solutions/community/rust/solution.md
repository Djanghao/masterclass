# Simple rust solution using priority queue

**Author:** RustEnthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4794344/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4794344/)

---

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn connect_sticks(sticks: Vec<i32>) -> i32 {
        let (mut cost, mut heap) = (0, BinaryHeap::from_iter(sticks.into_iter().map(|e| Reverse(e))));
        while let Some(min_cost) = heap.pop().zip(heap.pop()).map(|(Reverse(a), Reverse(b))| a+b) {
            cost += min_cost;
            heap.push(Reverse(min_cost));
        }
        cost
    }
}
```