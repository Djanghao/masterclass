# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/1143486/](https://leetcode.com/problems/global-and-local-inversions/solutions/1143486/)

---

```rust
impl Solution {
    pub fn is_ideal_permutation(a: Vec<i32>) -> bool {
        a.iter()
            .enumerate()
            .all(|(i, &n)| (n - i as i32).abs() <= 1)
    }
}
```

```rust
impl Solution {
    pub fn is_ideal_permutation(a: Vec<i32>) -> bool {
        a.windows(3).all(|w| {
            (w[0] < w[1] && w[1] < w[2])
                || (w[0] - w[1] == 1 && w[1] < w[2])
                || (w[0] < w[1] && w[1] - w[2] == 1)
        })
    }
}
```