# Clean Idiomatic Rust 0ms Solution

**Author:** Imyr
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5097557/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5097557/)

---

# Code
```
impl Solution {
    pub fn reverse_prefix(word: String, ch: char) -> String {
        if let Some(idx) = word.find(ch) {
            word[0..=idx].chars().rev().collect::<String>() + &word[idx+1..]
        } else {
            word
        }
    }
}
```