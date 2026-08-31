# Rust sliding window solution

**Author:** guimauve
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/3634367/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/3634367/)

---

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring_k_distinct(s: String, k: i32) -> i32 {
        if k == 0 {
            return 0;
        }
        let s = s.as_bytes();
        let (mut left, mut longest_substr, mut charmap) = (0, 0, HashMap::<u8, usize>::new());
        for i in 0..s.len() {
            if let Some(freq) = charmap.get_mut(&s[i]) {
                *freq += 1;
                longest_substr = std::cmp::max(longest_substr, i - left + 1);
            } else {
                if charmap.len() < k as usize {
                    longest_substr = std::cmp::max(longest_substr, i - left + 1);
                } else {
                    // Store char frequencies, advance left, decrease the s[left] frequency.
                    // When a frequency is equal to 0, pop it from the map amd advance left +1.
                    while left < i {
                        let count = charmap.get_mut(&s[left]).unwrap();
                        *count -= 1;
                        if *count == 0 {
                            charmap.remove(&s[left]);
                            break;
                        }
                        left += 1;
                    }
                    left += 1;
                }
                charmap.insert(s[i], 1);
            }
        }

        longest_substr as i32
    }
}

```