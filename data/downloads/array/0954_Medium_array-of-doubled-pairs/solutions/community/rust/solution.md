# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/1396885/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/1396885/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn can_reorder_doubled(arr: Vec<i32>) -> bool {
        let mut hm = HashMap::new();
        for &a in &arr {
            *hm.entry(a).or_insert(0) += 1;
        }
        let mut v = hm.keys().cloned().collect::<Vec<_>>();
        v.sort_unstable_by_key(|k| k.abs());
        for k in &v {
            let n1 = *hm.get(k).unwrap();
            if n1 > 0 {
                if let Some(n2) = hm.get_mut(&(k * 2)) {
                    *n2 -= n1;
                    if *n2 < 0 {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
        true
    }
}
```