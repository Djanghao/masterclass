# Rust: Optimum solution, 4 lines of code

**Author:** kristopherbullinger
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1045338/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1045338/)

---

```rust
impl Solution {
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        let i = letters.binary_search(&target)
            .map(|i| i + 1)
            .unwrap_or_else(|i| i);
        letters[i % letters.len()]
    }
}
```