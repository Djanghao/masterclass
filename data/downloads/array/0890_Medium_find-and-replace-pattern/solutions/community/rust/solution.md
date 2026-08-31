# Rust: 0ms Solution

**Author:** seandewar
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/1221197/](https://leetcode.com/problems/find-and-replace-pattern/solutions/1221197/)

---

This solution uses Rust's iterators and implements a single pattern map as a `Vec<char>` with 26 elements.

```rust
impl Solution {
    pub fn find_and_replace_pattern(words: Vec<String>, pattern: String) -> Vec<String> {
        words
            .into_iter()
            .filter(|w| {
                let mut pmap = vec!['\\0'; 26];
                w.chars()
                    .zip(pattern.chars().map(|p| p as usize - 'a' as usize))
                    .all(|(c, i)| {
                        if pmap[i] == '\\0' {
                            pmap[i] = c;
                            pmap.iter().filter(|&&c| c == pmap[i]).count() == 1
                        } else {
                            c == pmap[i]
                        }
                    })
            })
            .collect()
    }
}
```