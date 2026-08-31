# Rust | (28ms, 3.5 MB)

**Author:** RBird111
**Votes:** 2
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3734186/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3734186/)

---

# Code
```rust
impl Solution {
    pub fn put_marbles(weights: Vec<i32>, k: i32) -> i64 {
        let n = weights.len();
        let mut pair_weights: Vec<_> = (0..n - 1)
            .map(|i| weights[i] + weights[i + 1])
            .collect();

        pair_weights.sort_unstable();

        (0..(k - 1) as usize).fold(0i64, |ans, i| {
            ans + (pair_weights[n - 2 - i] - pair_weights[i]) as i64
        })
    }
}
```