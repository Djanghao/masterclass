# Rust simple solution | beat 100%

**Author:** pierrewang
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/2265505/](https://leetcode.com/problems/group-shifted-strings/solutions/2265505/)

---

```
impl Solution {
    pub fn group_strings(mut strings: Vec<String>) -> Vec<Vec<String>> {
        use std::collections::HashMap;
        let mut hm = HashMap::new();
        
        for s in strings.into_iter() {
            let key = s.as_bytes()
                       .windows(2)
                       .fold(vec![], |mut acc, w| {
                            let diff = (w[1] - w[0] + 26) % 26;
                            acc.push(diff);
                            acc 
                       });
            hm.entry(key).or_insert(vec![]).push(s);
        }
        hm.into_iter().map(|(_, v)| v).collect()
    }
}
```