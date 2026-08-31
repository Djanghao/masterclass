# Rust HashMap onepass

**Author:** wddwycc
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/1022934/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/1022934/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn max_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut res = 0;
        let mut hashmap = HashMap::new();
        for num in nums {
            let target = k - num;
            match hashmap.get_mut(&target) {
                Some(a) => {
                    if *a > 1 {
                        *a -= 1;
                    } else {
                        hashmap.remove_entry(&target);
                    }
                    res += 1;
                }
                None => {
                    *hashmap.entry(num).or_insert(0) += 1;
                }
            }
        }
        res
    }
}
```
