# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/2114112/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/2114112/)

---

```
use std::collections::*;
impl Solution {
  pub fn equal_digit_frequency(s: String) -> i32 {
    let n = s.len();
    let base = s.clone();
    let s = s.chars().collect::<Vec<char>>();
    let s = s.into_iter().map(|v| (v as u8 - '0' as u8) as usize).collect::<Vec<usize>>();

    let mut set = HashSet::new();
    for i in 0..n {
      let mut memo = vec![0;10];
      for j in i..n {
        memo[s[j]] += 1;

        let a = memo[s[j]];
        let mut success = true;
        for &v in &memo {
          if v != 0 && a != v {
            success = false;
            break
          }
        }
        if success {
          set.insert(&base[i..=j]);
        }
      }
    }

    set.len() as i32
  }
}
```