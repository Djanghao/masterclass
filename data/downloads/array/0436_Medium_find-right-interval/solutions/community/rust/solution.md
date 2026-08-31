# Rust BTreeMap solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/814357/](https://leetcode.com/problems/find-right-interval/solutions/814357/)

---

```rust
use std::collections::BTreeMap;

impl Solution {
    pub fn find_right_interval(intervals: Vec<Vec<i32>>) -> Vec<i32> {
        let mut btm: BTreeMap<i32, usize> = BTreeMap::new();
        for (i, interval) in intervals.iter().enumerate() {
            btm.insert(interval[0], i);
        }
        let mut answer: Vec<i32> = Vec::with_capacity(intervals.len());
        for interval in intervals.iter() {
            if let Some(e) = btm.range(interval[1]..).next() {
                answer.push(*e.1 as i32);
            } else {
                answer.push(-1);
            }
        }
        answer
    }
}
```