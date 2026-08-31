# Rust solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099753/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1099753/)

---

```rust
impl Solution {
    pub fn remove_palindrome_sub(s: String) -> i32 {
        let (s, len) = (s.as_bytes(), s.len());
        if s.is_empty() {
            0
        } else if (0..len / 2).all(|i| s[i] == s[len - 1 - i]) {
            1
        } else {
            2
        }
    }
}
```