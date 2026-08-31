# Rust solution

**Author:** BigMih
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131755/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131755/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn num_different_integers(word: String) -> i32 {
        (&word)
            .split(char::is_alphabetic)
            .filter(|s| !s.is_empty())
            .map(|x| x.trim_start_matches('0'))
            .collect::<HashSet<&str>>()
            .len() as i32
    }
}
```