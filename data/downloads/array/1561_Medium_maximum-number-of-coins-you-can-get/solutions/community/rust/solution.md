# Rust | 10ms

**Author:** RBird111
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322416/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322416/)

---

# Code
```rust
impl Solution {
    pub fn max_coins(mut piles: Vec<i32>) -> i32 {
        let n = piles.len() / 3;
        piles.sort_unstable();
        piles.into_iter().skip(n).step_by(2).sum()
    }
}
```