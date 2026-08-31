# Rust 1-line solution

**Author:** sugyan
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/861928/](https://leetcode.com/problems/find-the-difference/solutions/861928/)

---

```rust
impl Solution {
    pub fn find_the_difference(s: String, t: String) -> char {
        s.as_bytes()
            .iter()
            .chain(t.as_bytes())
            .fold(0, |acc, &x| acc ^ x) as char
    }
}
```