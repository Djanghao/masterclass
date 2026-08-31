# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/detect-capital/solutions/766573/](https://leetcode.com/problems/detect-capital/solutions/766573/)

---

```rust
impl Solution {
    pub fn detect_capital_use(word: String) -> bool {
        let v: Vec<char> = word.chars().collect();
        if v[0].is_lowercase() {
            return v.iter().all(|&c| c.is_lowercase());
        }
        if v.len() > 1 {
            let b = v[1].is_lowercase();
            return v.iter().skip(1).all(|&c| c.is_lowercase() == b);
        }
        true
    }
}
```