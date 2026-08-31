# Rust | One-Liner | With Comments

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2590429/](https://leetcode.com/problems/smallest-even-multiple/solutions/2590429/)

---

This is my unrevised submission for the 2022-09-18 Weekly Contest 311. If the number `n` is divisible by two, the smallest multiple is `1*n`. If not it's `2*n`.

Comment: I actually lost some time wondering if there was something I had missed, because it seemed too easy. :)

```rust
impl Solution {
    pub fn smallest_even_multiple(n: i32) -> i32 {
        if n % 2 == 0 { n } else { 2*n }
    }
}
```