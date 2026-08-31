# Rust bruteforce

**Author:** grimerssy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/5963710/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/5963710/)

---

# Code
```rust []
impl Solution {
    pub fn longest_semi_repetitive_substring(s: String) -> i32 {
        (0..s.len())
            .flat_map(|i| (i..s.len()).map(move |j| (i, j)))
            .map(|(i, j)| &s.as_bytes()[i..=j])
            .filter(|bytes| bytes.windows(2).filter(|w| w[0] == w[1]).count() <= 1)
            .map(<[_]>::len)
            .max()
            .unwrap() as i32
    }
}
```