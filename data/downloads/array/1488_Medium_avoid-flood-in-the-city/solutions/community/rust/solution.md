# Rust HashMap and BTreeSet Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/2019883/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/2019883/)

---

```rust
use std::collections::{HashMap, BTreeSet};
use std::ops::Bound::*;

impl Solution {
    pub fn avoid_flood(rains: Vec<i32>) -> Vec<i32> {
        let mut dry_lakes = BTreeSet::new();
        let mut lakes = HashMap::new();
        let mut ans = vec![1; rains.len()];
        for (i, r) in rains.into_iter().enumerate() {
            if r == 0 {
                dry_lakes.insert(i);
                continue;
            }
            if lakes.contains_key(&r) {
                if let Some(j) = dry_lakes.range((Excluded(lakes[&r]), Excluded(i))).next().copied() {
                    ans[j] = r;
                    dry_lakes.remove(&j);
                } else {
                    return vec![];
                }
            }
            lakes.insert(r, i);
            ans[i] = -1;
        }
        ans
    }
}
```