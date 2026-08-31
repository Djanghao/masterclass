# Rust simple with HashMap

**Author:** grimerssy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5938655/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5938655/)

---

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn find_lonely(nums: Vec<i32>) -> Vec<i32> {
        let lonely = nums.iter().fold(HashMap::new(), |mut lonely, n| {
            for x in [n - 1, *n, n + 1] {
                lonely
                    .entry(x)
                    .and_modify(|lonely| *lonely = false)
                    .or_insert(true);
            }
            lonely
        });
        nums.into_iter()
            .filter(|n| *lonely.get(n).unwrap())
            .collect()
    }
}
```