# Rust HashSet

**Author:** grimerssy
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/6028134/](https://leetcode.com/problems/number-of-distinct-averages/solutions/6028134/)

---

# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn distinct_averages(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();
        let mut nums = nums.iter();
        core::iter::from_fn(|| nums.next().map(|min| (min, nums.next_back().unwrap())))
            .map(|(min, max)| min + max)
            .collect::<HashSet<_>>()
            .len() as i32
    }
}
```