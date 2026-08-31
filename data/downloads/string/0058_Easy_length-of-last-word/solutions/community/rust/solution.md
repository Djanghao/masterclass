# Rust one liner

**Author:** BigMih
**Votes:** 23
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/1320947/](https://leetcode.com/problems/length-of-last-word/solutions/1320947/)

---

```
impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        s.trim_end()
            .chars()
            .rev()
            .take_while(|c| c.is_alphabetic())
            .count() as i32
    }
}
```