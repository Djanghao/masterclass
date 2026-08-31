# Rust solution

**Author:** BigMih
**Votes:** 5
**Link:** [https://leetcode.com/problems/word-pattern/solutions/1696849/](https://leetcode.com/problems/word-pattern/solutions/1696849/)

---

```
impl Solution {
    pub fn word_pattern(pattern: String, s: String) -> bool {
        use std::collections::{HashMap, HashSet};

        if pattern.len() != s.matches(' ').count() + 1 {
            return false;
        }
        let mut hm = HashMap::new();
        let mut word_set = HashSet::new();

        for (word, c) in s.split_ascii_whitespace().zip(pattern.chars()) {
            if let Some(w) = hm.insert(c, word) {
                if w != word {
                    return false;
                }
            } else if !word_set.insert(word) {
                return false;
            }
        }
        true
    }
}
```