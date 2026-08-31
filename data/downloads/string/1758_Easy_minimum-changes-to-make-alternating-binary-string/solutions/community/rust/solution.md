# Faster than 100% || Rust || Functional Way

**Author:** aynp
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4453921/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4453921/)

---

# Code
```rust
use std::cmp;

impl Solution {
    pub fn min_operations(s: String) -> i32 {
        let (even, odd) = s
            .char_indices()
            .fold((0, 0), |(even, odd), (i, c)| match c {
                '0' => match i % 2 {
                    0 => (even + 1, odd),
                    _ => (even, odd + 1),
                },
                _ => match i % 2 {
                    0 => (even, odd + 1),
                    _ => (even + 1, odd),
                },
            });

        cmp::min(even, odd)
    }
}
```