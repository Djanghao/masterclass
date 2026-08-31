# Rust: Short Solution

**Author:** seandewar
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/1164988/](https://leetcode.com/problems/maximum-repeating-substring/solutions/1164988/)

---

```rust
impl Solution {
    pub fn max_repeating(sequence: String, word: String) -> i32 {
        let max_word = word.repeat(sequence.len() / word.len());
        let mut n = max_word.len();
        while sequence.find(&max_word[..n]).is_none() {
            n -= word.len();
        }
        (n / word.len()) as _
    }
}
```

We can safely slice the `String`s wherever we want as we know that they're valid ASCII.