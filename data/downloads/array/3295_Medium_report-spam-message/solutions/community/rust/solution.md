# Rust

**Author:** chusonwang
**Votes:** 2
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5818502/](https://leetcode.com/problems/report-spam-message/solutions/5818502/)

---

# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn report_spam(message: Vec<String>, banned_words: Vec<String>) -> bool {
        let banned_words: HashSet<_> = banned_words.iter().collect();
        message.iter().filter(|m| banned_words.contains(m)).count() > 1
    }
}
```