# simple rust one line

**Author:** kennylong
**Votes:** 2
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2062432/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2062432/)

---

```rust
impl Solution {
    pub fn percentage_letter(s: String, letter: char) -> i32 {
        (s.chars().filter(|c| *c == letter).count() * 100 / s.len()) as i32
    }
}
```