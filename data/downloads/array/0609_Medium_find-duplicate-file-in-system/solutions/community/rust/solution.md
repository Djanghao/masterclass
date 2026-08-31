# Rust HashMap solution

**Author:** sugyan
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/1215511/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/1215511/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn find_duplicate(paths: Vec<String>) -> Vec<Vec<String>> {
        let mut hm = HashMap::new();
        for input in &paths {
            let v = input.split(' ').collect::<Vec<_>>();
            for &file in &v[1..] {
                if let Some(pos) = file.chars().position(|c| c == '(') {
                    hm.entry(&file[pos + 1..file.len() - 1])
                        .or_insert_with(Vec::new)
                        .push(String::new() + v[0] + "/" + &file[..pos]);
                }
            }
        }
        hm.into_iter()
            .filter_map(|(_, v)| if v.len() > 1 { Some(v) } else { None })
            .collect()
    }
}
```