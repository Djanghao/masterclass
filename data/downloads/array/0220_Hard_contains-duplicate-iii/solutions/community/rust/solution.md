# Rust 4ms solution with BTreeSet

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/512397/](https://leetcode.com/problems/contains-duplicate-iii/solutions/512397/)

---

```rust
use std::collections::BTreeSet;

impl Solution {
    pub fn contains_nearby_almost_duplicate(nums: Vec<i32>, k: i32, t: i32) -> bool {
        if t < 0 {
            return false;
        }
        let k = k as usize;
        let t = t as i64;
        let mut bts: BTreeSet<i64> = BTreeSet::new();
        for i in 0..nums.len() {
            if i > k as usize {
                bts.remove(&(nums[i - 1 - k] as i64));
            }
            if bts
                .range(nums[i] as i64 - t..=nums[i] as i64 + t)
                .next()
                .is_some()
            {
                return true;
            }
            bts.insert(nums[i] as i64);
        }
        false
    }
}
```