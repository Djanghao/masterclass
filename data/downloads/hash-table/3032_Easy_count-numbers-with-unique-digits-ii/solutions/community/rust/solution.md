# Rust | HashSet

**Author:** zjxy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5176485/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5176485/)

---

```
use std::collections::HashSet;
impl Solution {
    pub fn number_count(a: i32, b: i32) -> i32 {
        let mut unique = 1 + (b - a);
        let mut unique_digits = HashSet::new();
        for i in a..=b {
            if i.to_string()
                .chars()
                .try_for_each(|c| {
                    if !unique_digits.insert(c) {
                        return Err(());
                    }
                    Ok(())
                })
                .is_err()
            {
                unique -= 1;
            }
            unique_digits.clear();
        }
        unique
    }
}
```