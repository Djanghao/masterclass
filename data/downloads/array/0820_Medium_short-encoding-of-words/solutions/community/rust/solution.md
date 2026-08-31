# Rust - Removing words that are Suffixes

**Author:** nuclearoreo
**Votes:** 2
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/1096657/](https://leetcode.com/problems/short-encoding-of-words/solutions/1096657/)

---

```rust
use std::collections::HashSet;

impl Solution {
    pub fn minimum_length_encoding(words: Vec<String>) -> i32 {
        let mut good: HashSet<String> = HashSet::new();
        
        for word in words.iter() { 
            good.insert(word.to_string()); 
        }
        
        for word in words.iter() {
            for i in 1..word.len() {
                let suffix = &word[i..];
                good.remove(suffix);
            }
        }
        
        let mut res = 0;
        for word in good.iter() { 
            res += (word.len() as i32) + 1;
        }
        
        res
    }
}
```