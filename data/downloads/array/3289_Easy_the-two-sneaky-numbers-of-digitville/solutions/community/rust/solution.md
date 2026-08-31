# hashset

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5945503/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5945503/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::HashSet;

impl Solution {
  pub fn get_sneaky_numbers(nums: Vec<i32>) -> Vec<i32> {
    let mut hs:HashSet<i32> = HashSet::new();
    let mut res:Vec<i32> = Vec::new();
    for n in nums {
      if hs.contains(&n) {
        res.push(n);
      }
      hs.insert(n);
    }
    res
  }
}
```