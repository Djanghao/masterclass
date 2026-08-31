# Rust Solution

**Author:** inyono
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2139095/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2139095/)

---

```rust
use std::collections::HashMap;
use std::collections::HashSet;

impl Solution {
    pub fn match_replacement(s: String, sub: String, mappings: Vec<Vec<char>>) -> bool {
        let s: Vec<_> = s.chars().collect();
        let sub: Vec<_> = sub.chars().collect();
        
        let mut replacements = HashMap::new();
        for mapping in mappings.iter() {
            if let [a, b] = &mapping[..] {
                let mut set = replacements.get_mut(&a).cloned().unwrap_or(HashSet::new());
                set.insert(b);
                replacements.insert(a, set);
            }
        }
        
        'outer: for start in 0..=(s.len() - sub.len()) {
            for i in 0..sub.len() {
                let a = s[start + i];
                let b = sub[i];
                if s[start + i] != sub[i] && !replacements.get(&b).map_or(false, |set| set.contains(&a)) {                    
                    continue 'outer;
                }
            }
            return true;
        }
        false
    }
}
```