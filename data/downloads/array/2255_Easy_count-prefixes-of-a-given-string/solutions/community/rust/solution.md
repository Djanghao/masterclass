# Rust solutions

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1997642/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1997642/)

---

1. Simle use of `starts_with`:
```
impl Solution {
    pub fn count_prefixes(words: Vec<String>, s: String) -> i32 {
        words.iter().filter(|w| s.starts_with(w.as_str())).count() as _
    }
}
```
2. Slice comparison
```
impl Solution {
    pub fn count_prefixes(words: Vec<String>, s: String) -> i32 {
        words
            .iter()
            .filter(|w| w.len() <= s.len() && w.as_str() == &s[..w.len()])
            .count() as _
    }
}
```
3. Functional solution with `zip`:
```
impl Solution {
    pub fn count_prefixes(words: Vec<String>, s: String) -> i32 {
        words
            .iter()
            .filter(|w| w.len() <= s.len() && w.chars().zip(s.chars()).all(|(a, b)| a == b))
            .count() as _
    }
}
```