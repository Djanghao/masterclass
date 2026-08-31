# Rust sorting solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1078026/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1078026/)

---

```rust
impl Solution {
    pub fn find_longest_word(s: String, d: Vec<String>) -> String {
        let mut d = d;
        d.sort_unstable_by(|a, b| b.len().cmp(&a.len()).then(a.cmp(&b)));
        let s = s.as_bytes();
        let can_be_formed = |word: &String| -> bool {
            let mut i = 0;
            for &b in word.as_bytes() {
                while i < s.len() && s[i] != b {
                    i += 1;
                }
                if i == s.len() {
                    return false;
                }
                i += 1;
            }
            true
        };
        d.into_iter().find(can_be_formed).unwrap_or_default()
    }
}
```