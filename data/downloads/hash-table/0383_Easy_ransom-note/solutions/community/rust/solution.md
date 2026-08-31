# Rust solution using HashMap's Entry API

**Author:** morlinbrot
**Votes:** 11
**Link:** [https://leetcode.com/problems/ransom-note/solutions/2707491/](https://leetcode.com/problems/ransom-note/solutions/2707491/)

---

```
impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        
		let mut dict = std::collections::HashMap::new();
        
        for c in magazine.chars() {
            dict.entry(c).and_modify(|count| *count += 1).or_insert(1);
        }
        
        for c in ransom_note.chars() {
            match dict.get_mut(&c) {
                Some(n) if *n > 0 => { *n -= 1; }
                _ => { return false; }
            }
        }
        
        true
    }
}
```