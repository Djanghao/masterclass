# Rust HashMap solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049196/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/1049196/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        let mut hm = HashMap::new();
        nums.iter()
            .for_each(|&num| *hm.entry(num).or_insert(0) += 1);
        hm.iter().fold(0, |acc, (&num, &count)| {
            hm.get(&(num + 1)).map_or(acc, |c| acc.max(count + c))
        })
    }
}
```