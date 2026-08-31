# [Rust 0ms 100%] HashMap with Insert API + iterators

**Author:** shilangyu
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/570689/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/570689/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn find_lucky(arr: Vec<i32>) -> i32 {
        let mut freq = HashMap::new();
        
        for x in arr {
            freq.entry(x)
               .and_modify(|e| { *e += 1 })
               .or_insert(1);
        }
        
        freq.iter()
            .filter(|(key, val)| key == val)
            .map(|(key, val)| *val)
            .max()
            .unwrap_or(-1)
    }
}
```