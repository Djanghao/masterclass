# Rust solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/1134368/](https://leetcode.com/problems/russian-doll-envelopes/solutions/1134368/)

---

```rust
use std::cmp::Reverse;

impl Solution {
    pub fn max_envelopes(envelopes: Vec<Vec<i32>>) -> i32 {
        let mut envelopes = envelopes
            .iter()
            .map(|envelope| (envelope[0], Reverse(envelope[1])))
            .collect::<Vec<_>>();
        envelopes.sort_unstable();
        let mut dp = Vec::new();
        for &(_, Reverse(h)) in &envelopes {
            if let Some(i) = dp.binary_search(&h).err() {
                if i < dp.len() {
                    dp[i] = h;
                } else {
                    dp.push(h);
                }
            }
        }
        dp.len() as i32
    }
}
```