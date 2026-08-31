# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2701806/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2701806/)

---

There is a constraints 1 <= sum(words[in].length) <= 10^5.
This is very small so we don't need to use trie for this problem.

```
use std::collections::*;

impl Solution {
    pub fn longest_word(mut words: Vec<String>) -> String {
        let mut set = HashSet::new();
        let ws = words.clone();
        for v in &ws {
            set.insert(v.as_str());
        }

        let mut max = 0;
        let mut arr = vec![];
        while let Some(s) = words.pop() {
            if s.len() < max { continue }

            let mut success = true;
            for j in 0..s.len() {
                if !set.contains(&s[0..=j]) {
                    success = false;
                    break
                }
            }
            if success {
                if max < s.len() {
                    max = s.len();
                    arr = vec![s];
                } else {
                    arr.push(s);
                }
            }
        }

        if max == 0 {
            format!("")
        } else {
            arr.sort();
            arr[0].clone()
        }
    }
}
```