# [Rust] single contains

**Author:** tarsisexistence
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1665876/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1665876/)

---

```rust
impl Solution {
    pub fn check_string(s: String) -> bool {
        !s.contains("ba")
    }
}
```