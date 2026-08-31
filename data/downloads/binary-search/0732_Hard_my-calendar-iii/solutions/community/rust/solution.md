# Rust BTreeMap solution

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/1263091/](https://leetcode.com/problems/my-calendar-iii/solutions/1263091/)

---

```rust
use std::collections::BTreeMap;

#[derive(Default)]
struct MyCalendarThree {
    tree: BTreeMap<i32, i32>
}

impl MyCalendarThree {
    fn new() -> Self {
        Default::default()
    }
    
    fn book(&mut self, start: i32, end: i32) -> i32 {
        *self.tree.entry(start).or_insert(0) += 1;
        *self.tree.entry(end).or_insert(0) -= 1;
        let mut active = 0;
        let mut ans = 0;
        for &ct in self.tree.values() {
            active += ct;
            ans = ans.max(active);
        }
        ans
    }
}
```