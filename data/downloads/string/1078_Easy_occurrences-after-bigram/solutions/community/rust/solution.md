# Rust - Using Iterator::scan [0ms 2MB]

**Author:** dimtion
**Votes:** 2
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/1262269/](https://leetcode.com/problems/occurrences-after-bigram/solutions/1262269/)

---

```rust
impl Solution {
    pub fn find_ocurrences(text: String, first: String, second: String) -> Vec<String> {
        text.split_whitespace().scan(
            ("", ""),
            |(q, r), w| {
                let p = *q;
                *q = r;
                *r = w;
                Some(if p == &first && q == &second {
                    Some(w.to_string())
                } else {
                    None
                })
            }
        ).filter_map(|w| w).collect()
    }
}
```