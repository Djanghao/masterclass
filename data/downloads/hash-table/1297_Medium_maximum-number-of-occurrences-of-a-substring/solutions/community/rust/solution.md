# Rust Solution using slinding window

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2698098/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2698098/)

---

```
use std::collections::*;

impl Solution {
    pub fn max_freq(s: String, max_letters: i32, min_size: i32, max_size: i32) -> i32 {
        let ss = s.clone();
        let s = s.chars().collect::<Vec<char>>();
        let n = s.len();
        let mut map = HashMap::new();
        
        let min = min_size as usize;
        let max = max_size as usize;
        for i in min..=max {
            let mut memo = vec![0;26];
            let mut count = 0;
            for j in 0..i {
                let ci  = (s[j] as u8 - 'a' as u8) as usize;
                if memo[ci] == 0 {
                    count += 1;
                }
                memo[ci] += 1;
            }

            if count <= max_letters {
                *map.entry(&ss[0..i]).or_insert(0) += 1;
            }

            for j in i..n {
                let li = (s[j-i] as u8 - 'a' as u8) as usize;
                memo[li] -= 1;
                if memo[li] == 0 {
                    count -= 1;
                }

                let ci = (s[j] as u8 - 'a' as u8) as usize;
                if memo[ci] == 0 {
                    count += 1;
                }
                memo[ci] += 1;

                if count <= max_letters {
                    *map.entry(&ss[j-i+1..=j]).or_insert(0) += 1;
                }
            }
        }

        let mut max = 0;
        for (_, num) in map {
            max = max.max(num);
        }
        max
    }
}
```