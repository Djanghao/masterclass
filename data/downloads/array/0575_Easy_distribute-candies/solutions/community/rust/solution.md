# Rust solution

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/1088072/](https://leetcode.com/problems/distribute-candies/solutions/1088072/)

---

```rust
use std::collections::HashSet;

impl Solution {
    pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
        let len = candy_type.len();
        let hashset: HashSet<i32> = candy_type.into_iter().collect();
        std::cmp::min(len / 2, hashset.len()) as i32
    }
}
```