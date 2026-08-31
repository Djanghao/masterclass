# Rust - simple HashTable solution

**Author:** morfalcio_code
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5997394/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5997394/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
use std::collections::*;

impl Solution {
    pub fn minimum_sum(n: i32, target: i32) -> i32 {
        let mut set = HashSet::new();

        let mut curr_sum = 0;

        let mut i = 1;

        while set.len() < n as usize {
            if !set.contains(&(target-i)) {
                set.insert(i);
                curr_sum += i;
            }
            i += 1;
        }

        set.iter().sum::<i32>()
    }
}
```