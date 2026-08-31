# Rust one-liner solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/1037271/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/1037271/)

---

```rust
const DIV: u64 = 1_000_000_007;

impl Solution {
    pub fn concatenated_binary(n: i32) -> i32 {
        (2..=n).fold(1_u64, |acc, x| {
            ((acc << (32 - x.leading_zeros())) + x as u64) % DIV
        }) as i32
    }
}
```