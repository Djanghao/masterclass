# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1421969/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1421969/)

---

```
impl Solution {
    pub fn min_time_to_type(word: String) -> i32 {
        word.as_bytes()
            .iter()
            .fold((word.len() as i32, b'a'), |(sum, prev), &b| {
                let steps = (prev as i32 - b as i32).abs();
                (sum + steps.min(26 - steps), b)
            })
            .0
    }
}
```