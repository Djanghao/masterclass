# Rust O(n)

**Author:** jaredlwong
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1933390/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1933390/)

---

```rust
use std::cmp;

impl Solution {
    pub fn minimum_time(s: String) -> i32 {
        let mut cur_sum: i32 = 0;
        let mut min_sum: i32 = 0;
        for c in s.chars() {
            let n: i32 = if c == '1' { 1 } else { -1 };
            cur_sum = cmp::min(cur_sum+n, n);
            min_sum = cmp::min(min_sum, cur_sum);
        }
        (s.len() as i32) + min_sum
    }
}
```