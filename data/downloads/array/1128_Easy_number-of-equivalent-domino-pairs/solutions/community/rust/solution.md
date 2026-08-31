# [Rust] Cleaner rust solution

**Author:** JMS55
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/839014/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/839014/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn num_equiv_domino_pairs(dominoes: Vec<Vec<i32>>) -> i32 {
        let mut count = HashMap::new();
        for d in dominoes {
            let d = (d[0].min(d[1]), d[0].max(d[1]));
            *count.entry(d).or_insert(0) += 1;
        }
        count.values().map(|c| (c * (c - 1)) / 2).sum()
    }
}
```