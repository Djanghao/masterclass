# Rust Loop Solution

**Author:** JammyJ0
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4707962/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4707962/)

---

```
impl Solution {
    pub fn minimum_time_to_initial_state(word: String, k: i32) -> i32 {
        let (mut min_time, mut cycled_word, k) = (0, word.as_str(), k as usize);
        loop {
            if cycled_word.len() <= k {
                return min_time + 1;
            }
            cycled_word = &cycled_word[k..];
            min_time += 1;
            if word.starts_with(cycled_word) {
                return min_time;
            }
        }
    }
}
```