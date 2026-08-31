# Rust BTreeMap solution

**Author:** wddwycc
**Votes:** 5
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/1263158/](https://leetcode.com/problems/my-calendar-ii/solutions/1263158/)

---

```rust
use std::collections::BTreeMap;

#[derive(Default)]
struct MyCalendarTwo {
    tree: BTreeMap<i32, i32>
}

impl MyCalendarTwo {
    fn new() -> Self {
        Default::default()
    }
    
    fn book(&mut self, start: i32, end: i32) -> bool {
        *self.tree.entry(start).or_insert(0) += 1;
        *self.tree.entry(end).or_insert(0) -= 1;
        let mut active = 0;
        for &v in self.tree.values() {
            active += v;
            if active >= 3 {
                *self.tree.entry(start).or_insert(0) -= 1;
                *self.tree.entry(end).or_insert(0) += 1;
                return false;
            }
        }
        true
    }
}
```