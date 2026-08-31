# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/3225395/](https://leetcode.com/problems/distinct-echo-substrings/solutions/3225395/)

---

Just a rust implementation of Stefan's approach
# Code
```
impl Solution {
    pub fn distinct_echo_substrings(text: String) -> i32 {
        fn sliding_window(text: String) -> i32 {
            use std::collections::*;
            let mut set = HashSet::new();
            let text = text.chars().collect::<Vec<_>>();
            for window_size in 1..=text.len() / 2 {
                let mut same_count = 0;
                for i in 0..window_size {
                    if text[i] == text[i + window_size] {
                        same_count += 1i32;
                    }
                }
                for i in 0..=text.len() - window_size * 2 {
                    if same_count == window_size as i32 {
                        set.insert(&text[i..i + window_size]);
                    }
                    if i == text.len() - window_size * 2 {
                        break;
                    }
                    same_count += (text[i + window_size] == text[i + window_size * 2]) as i32
                        - (text[i] == text[i + window_size]) as i32;
                }
            }
            set.len() as i32
        }

        sliding_window(text)
    }
}
```