# Rust 0ms solution with iterator

**Author:** YthanZhang
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/2442126/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/2442126/)

---

Functional solution in Rust with iterator

```rust
impl Solution {
    pub fn max_depth(s: String) -> i32 {
        s.chars().filter_map(|c| match c {
            '(' => Some(1),
            ')' => Some(-1),
            _ => None,
        }).scan(0, |sum, n| {
            *sum += n;
            Some(*sum)
        }).max().unwrap_or(0)
    }
}
```