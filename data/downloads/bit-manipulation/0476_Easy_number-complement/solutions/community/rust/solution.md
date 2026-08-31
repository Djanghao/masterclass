# Rust simple solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-complement/solutions/612591/](https://leetcode.com/problems/number-complement/solutions/612591/)

---

```rust
impl Solution {
    pub fn find_complement(num: i32) -> i32 {
        let mut n = 1;
        while n < num {
            n = (n << 1) + 1;
        }
        n - num
    }
}
```